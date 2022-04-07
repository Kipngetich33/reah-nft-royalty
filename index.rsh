// Creator creates a NFT and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace 

'reach 0.1';

const allNfts = new Map()

export const main = Reach.App(() => {

    const nftCreator = Participant('creator', {
        metadata:Bytes(64),
        price:UInt,
        mintNft: Fun([metadata, price], null)
    })

    const nftBuyer = Participant('buyer', {
        nftId:UInt,
        buyNft: Fun([], null),
    })

    init() 

    nftCreator.only(() => {
        const nftMetadata = declassify(interact.metadata)
        const nftPrice = declassify(interact.price)
        interact.mintNft(nftMetadata, nftPrice)
    })
    nftCreator.publish(nftMetadata, nftPrice)
    assert(nftMetadata != '', 'Metadata cannot be empty')
    const myNFT = {
        id: 1,
        metadata: nftMetadata,
        price: nftPrice,
        creator: '0x0',
        owner: '0x0'
    }
    //interact.mintNft()
    //commit()
    /*nftCreator.mintNft(() => {
        assert(nftMetadata !='', 'Metadata cannot be null or empty')
        assert(nftPrice > 0, 'Please, set a price for your art piece')
        const myNft = nftData(0, nftMetadata, nftPrice, address[this], address[this])
        allNfts[this] = myNft
    })*/

   /* nftBuyer.only(() => {
        const id = declassify(interact.nftId) 
    })    
    nftBuyer.publish(id)*/

})