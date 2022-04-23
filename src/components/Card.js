import { useState, useEffect } from 'react'
import * as backend from '../../build/index.main.mjs'
import { loadStdlib } from '@reach-sh/stdlib'
import Identicon from 'react-identicons';
import { Web3Storage } from 'web3.storage'
import axios from 'axios'
//import MyAlgoConnect from '@randlabs/myalgo-connect'
import { ctcInfoStr } from '../utils'
import '../styles/card.css'

function Card({selectNFt, id, creator, metadata, price, owner, royalty}) {

    const reach = loadStdlib({REACH_CONNECTOR_MODE: 'ALGO'})
    const [nftMetadata, setMetadata] = useState()
    //const myAlgoConnect = new MyAlgoConnect()

    const storageKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ4M0U1RGEwRGJhODE1YWYyOTk5NDU4QjI0QjkwRGFGYzEwNzZCMEQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA0MTY3ODg3OTksIm5hbWUiOiJuZnQtd2l0aC1yb3lhbHR5In0.R-K1cAJgVvU63YID7lekYrJQ0wx0tlgeOMkmWNb-t0w'
    const client = new Web3Storage({ token: storageKey })

    
    const getMetadata = async()=> {
        const fileArray = await client.get(metadata)
        const [file1] = await fileArray.files()
        const {data} = await axios.get(`https://ipfs.io/ipfs/${file1.cid}`)
        setMetadata(data)
    }

    useEffect(() => {
        getMetadata()
    },[])

    const [load, setLoad] = useState(false)

    const buyNFT = async() => {
        //const [acc] = await myAlgoConnect.connect();
        const address = await reach.newTestAccount(reach.parseCurrency(20))
        setLoad(true)
        const ctc = address.contract(backend /*, JSON.parse(ctcInfoStr)*/);
        //console.log(ctc)
        backend.buyer(ctc, {
            nft : {
                creator,
                metadata,
                owner,
                price: reach.parseCurrency(price),
                royalty
            },
            buyNft:(nft) => {
                console.log(nft)
            }
        })
    
        //window.location.reload()
    }

    const getNFT = () => {
        selectNFt({
            img:nftMetadata?.imgLink,
            name:nftMetadata?.name,
            owner,
            description: nftMetadata?.description,
            price
        })
    }

    return (
        <div className='card' >
            <img src={nftMetadata?.imgLink} alt="" onMouseOver={getNFT}/>
            <h2>{nftMetadata?.name}</h2>
            <p className="price">{price} ALGO</p>
            <button onClick={buyNFT} disabled={load}>{!load?'Buy':'Loading...'}</button>
            <p className="ownerAddress"><span>Owner:{owner}</span></p>
            <span><Identicon string={owner} size={20}/></span>
        </div>
    )
}

export default Card