import * as backend from '../../build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib()

const creatorAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))
const buyerAccount = await stdlib.newTestAccount(stdlib.parseCurrency(20))

const beforeCreator = await stdlib.balanceOf(creatorAccount)
const beforeBuyer = await stdlib.balanceOf(buyerAccount)

const contractCreator = creatorAccount.contract(backend)
const contractBuyer = buyerAccount.contract(backend, contractCreator.getInfo())

let arr = []

await Promise.all([
    contractCreator.participants.creator({
        metadata:'https://merkim.dev',
        price: stdlib.parseCurrency(5),
        royalty: 4,
        mintNft: async(nft) => {
            console.log(nft)
        } 
    }),

    contractBuyer.participants.buyer({
        nft: {
            creator: '0x1d205c359f2e9bca069bca7cd763dd97418f2544422ba421efed950d771d373c',
            metadata:'https://merkim.dev',
            owner: '0x1d205c359f2e9bca069bca7cd763dd97418f2544422ba421efed950d771d373c',
            price: 5000000,
            royalty:4
        },
        buyNft:async(nft) => {
            const balanceNow = await stdlib.balanceOf(buyerAccount)
            console.log(`Buyer account went from ${stdlib.formatCurrency(Number(beforeBuyer))} to ${stdlib.formatCurrency(Number(balanceNow))} `)
        } 
    }),

    //const afterCreator = await stdlib.balanceOf(creatorAccount);
    //const afterBuyer = await stdlib.balanceOf(buyerAccount);
])
