import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib()

const creatorAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))
const buyerAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))

const contractCreator = creatorAccount.contract(backend)
const contractBuyer = buyerAccount.contract(backend, contractCreator.getInfo())

await Promise.all([
    contractCreator.participants.creator({
        metadata:'https://merkim.dev',
        price: stdlib.parseCurrency(1),
        royalty: 4,
        mintNft: (nft) => {
            for (let prop in nft) {
               console.log(`${prop}:${nft[prop]}.`)
            }
        } 
    }),
    contractBuyer.participants.buyer({
        nftId: 2,
        buyNft:(owner, id, price) => {
            const balance = stdlib.balanceOf(buyerAccount)
            balance.then((data => {
               console.log(`${owner} bought this id: ${id} for ${price} Algo. Now his balance is ${Number(data)}`)
            }))
        } 
    })
])
