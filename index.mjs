import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const stdlib = loadStdlib()

const creatorAccount = await stdlib.newTestAccount(stdlib.parseCurrency(4))
const buyerAccount = await stdlib.newTestAccount(stdlib.parseCurrency(4))

const contractCreator = creatorAccount.contract(backend)
const contractBuyer = buyerAccount.contract(backend, contractCreator.getInfo())

await Promise.all([
    contractCreator.participants.creator({
        metadata:'https://merkim.dev',
        price: stdlib.parseCurrency(2),
        mintNft: (metadata, price) => console.log(`${metadata} costs ${price}`),
    }),
    contractBuyer.participants.buyer({
        nftId: 2,
        buyNft:() => console.log('Bro you bought it')
    })
])
