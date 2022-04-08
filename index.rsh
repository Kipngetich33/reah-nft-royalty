// Creator creates an NFT(This will be uploaded to IPFS) and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace
'reach 0.1';

export const main = Reach.App(() => {

    const nftCreator = Participant('creator', {
        metadata:Bytes(64),
        price:UInt,
        mintNft: Fun([Bytes(64), UInt], Null)
    })

    const nftBuyer = Participant('buyer', {
        nftId:UInt,
        buyNft: Fun([UInt], Null),
    })

    init() 

    nftCreator.only(() => {
        const nftMetadata = declassify(interact.metadata)
        const nftPrice = declassify(interact.price)
        //assert(nftMetadata == Bytes(0))
        interact.mintNft(nftMetadata, nftPrice)
    })
    nftCreator.publish(nftMetadata, nftPrice)
    require(nftMetadata == Bytes(8), ['Metadata cannot be empty'])
    const myNFT = {
        id: 1,
        metadata: nftMetadata,
        price: nftPrice,
        creator: nftCreator,
        owner: nftCreator
    }

    /*const allNFTs = new Map(Address, Object({
        id: UInt,
        metadata: Bytes(64),
        price: UInt,
        creator: Address,
        owner: Address
    }))

    allNFTs[this] = myNFT*/
    commit()

    nftBuyer.only(() => {
        const id = declassify(interact.nftId) 
        interact.buyNft(id)
    })    
    nftBuyer.publish(id)
    commit()

})