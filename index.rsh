// Creator creates a NFT and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace 

'reach 0.1';

const nftData = {
    id: UInt,
    metadata: Bytes(64),
    price:UInt,
    creator: Address,
    owner: Address
}

export const main = Reach.App(() => {

    const nftCreator = Participant('creator', {
        metadata:Bytes(64),
        price:UInt,
        mintNft: Fun([], null)
    })
    const nftBuyer = Participant('buyer', {
        nftId:UInt,
        buyNft: Fun([], null),
    })

    init() 

    //const allNfts = new Map(Object(myNft))

    nftCreator.only(() => {
        const nftMetadata = declassify(interact.metadata)
        const nftPrice = declassify(interact.price)
    })
    nftCreator.publish(nftMetadata, nftPrice)
    commit()
    /*nftCreator.mintNft(() => {
        assert(nftMetadata !='', 'Metadata cannot be null or empty')
        assert(nftPrice > 0, 'Please, set a price for your art piece')
        const myNft = nftData(0, nftMetadata, nftPrice, address[this], address[this])
        allNfts[this] = myNft
    })*/

    nftBuyer.only(() => {
        const id = declassify(interact.nftId) 
    })    
    nftBuyer.publish(id)

})