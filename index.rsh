// Creator creates a NFT and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace 

'reach 0.1';
export const main = Reach.App(() => {

    const NFT = {
        id: UInt,
        metadata: Bytes(64),
        price:UInt,
        creator: Address,
        owner: Address
    }

    const NftsCount = 0

    //const NFTs = []  this array will contain all nfts

    const NftCreator = Participant('creator', {
        metadata:Bytes(64),
        price:UInt,
        //getData:Fun([], UInt)
    })
    const NftBuyer = Participant('buyer', {
        NftId:UInt,
        price:UInt
    })
    /*const NftSeller = Participant('seller', {

    });*/

    init() 

    NftCreator.only(() => {
        const id = NftsCount + 1
        const NftMetadata = declassify(interact.metadata)
        const NftPrice = declassify(interact.price)
        //;;assert(NftPrice>0, 'Price cannot be null')
        //const myNft = NFT(id, NftMetadata, NftPrice)
        const myNft = {
            id:id,
            NftMetadata:NftMetadata
        }
    })
    NftCreator.publish(myNft)
    commit()  

    NftBuyer.only(() => {
        const nftToBuyId = declassify(interact.NftId) 
        const nftToBuyPrice = declassify(interact.price)
    })

    /*NftBuyer.publish(nftToBuyId, nftToBuyPrice)
     .pay(nftToBuyPrice)
    commit()*/

})