// Creator creates an NFT(This will be uploaded to IPFS) and lists that to the marketplace 
// A random second user can also come to the website and buy a random nft 
// As soon as the money is transfered to the owner, ownership will also be transfered 
// Royalty will go the cerator of the art peace
'reach 0.1';

export const main = Reach.App(() => {

    const nftCreator = Participant('creator', {
        metadata:Bytes(64),
        price:UInt,
        royalty: UInt,
        mintNft: Fun([Object({
            id: UInt,
            metadata: Bytes(64),
            price: UInt,
            creator: Address,
            owner: Address,
            royalty:UInt
        })], Null)
    })

    const nftBuyer = Participant('buyer', {
        nftId:UInt,
        buyNft: Fun([Address, UInt, UInt], Null),
        changeowner: Fun([Address, Address], Null)
    })

    init() 

    nftCreator.only(() => {
        const nftMetadata = declassify(interact.metadata)
        const nftPrice = declassify(interact.price)
        const royalty = declassify(interact.royalty)
        const myNFT = {
           id: 1,
           metadata: nftMetadata,
           price: nftPrice,
           creator: nftCreator,
           owner: nftCreator,
           royalty:royalty
        }
        interact.mintNft(myNFT)
    })
    nftCreator.publish(myNFT)

    commit()

    nftBuyer.only(() => {
        const id = declassify(interact.nftId) 
    })
    nftBuyer.publish(id).pay(myNFT.price) 
    transfer(myNFT.price).to(myNFT.owner)
    const modifiedNFT ={...myNFT,["owner"]:nftBuyer}

    nftBuyer.interact.changeowner( myNFT.owner,modifiedNFT.owner)
    nftBuyer.interact.buyNft(modifiedNFT.owner, modifiedNFT.id, modifiedNFT.price)
    commit()
    
})




















/*const NFT_API = API('NFT_API', {
        changeOwner:Fun([], Object({
            id: UInt,
            metadata: Bytes(64),
            price: UInt,
            creator: Address,
            owner: Address,
            royalty:UInt
        }))
    })*/

/*const [owner] = parallelReduce([ myNFT ])
      .invariant(balance() == myNFT.price)
      .while(false)
      .api(
        NFT_API.changeOwner, 
          //(() => { check(this != myNFT.owner), 'yoooh'}),
          (() => 0),
          ((k) => {
            //transfer(myNFT.price / myNFT.royalty).to(myNFT.creator)
            //transfer(myNFT.price - myNFT.price/ myNFT.royalty).to(myNFT.owner)  
            const cc ={...myNFT,["owner"]:nftBuyer}
            nftBuyer.interact.changeowner(cc)
            k(cc)
            return [cc]
          })
      );*/