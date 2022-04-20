import * as backend from '../../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib()

const creatorAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))
const buyerAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))

const beforeCreator = await stdlib.balanceOf(creatorAccount)
const beforeBuyer = await stdlib.balanceOf(buyerAccount)

const contractCreator = creatorAccount.contract(backend)
const contractBuyer = buyerAccount.contract(backend, contractCreator.getInfo())

await Promise.all([
    contractCreator.participants.creator({
        metadata:'https://merkim.dev',
        price: stdlib.parseCurrency(5),
        royalty: 4,
        mintNft: (nft) => {
            for (let prop in nft) {
               console.log(`${prop}:${nft[prop]}.`)
            }
        } 
    }),
    contractBuyer.participants.buyer({
        nftId: 2,
        changeowner:(lastOwner, newOwner) => {
            console.log(`Owner went from ${lastOwner} to ${newOwner}`)
        },
        buyNft:(owner, id, price) => {
            stdlib.balanceOf(buyerAccount).then(
                data => {
                    console.log(`${owner} bought this id: ${id} for ${stdlib.formatCurrency(price)} Algo. His balance went from ${stdlib.formatCurrency(Number(beforeBuyer))} to ${stdlib.formatCurrency(Number(data))}`)
                }
            )
            stdlib.balanceOf(creatorAccount).then(
                data => {
                    console.log(`Creator balance went from ${stdlib.formatCurrency(Number(beforeCreator))} to ${stdlib.formatCurrency(Number(data))}`)
                }
            )
        } 
    }),

    /*contractBuyer.participants.buyer({
        nftId: 3,
        changeowner:(lastOwner, newOwner) => {
            console.log(`Owner went from ${lastOwner} to ${newOwner}`)
        },
        buyNft:(owner, id, price) => {
            stdlib.balanceOf(buyerAccount).then(
                data => {
                    console.log(`${owner} bought this id: ${id} for ${stdlib.formatCurrency(price)} Algo. His balance went from ${stdlib.formatCurrency(Number(beforeBuyer))} to ${stdlib.formatCurrency(Number(data))}`)
                }
            )
            stdlib.balanceOf(creatorAccount).then(
                data => {
                    console.log(`Creator balance went from ${stdlib.formatCurrency(Number(beforeCreator))} to ${stdlib.formatCurrency(Number(data))}`)
                }
            )
           
        } 
    })*/
])
