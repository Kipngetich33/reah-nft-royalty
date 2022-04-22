import { useState } from 'react'
import * as backend from '../../build/index.main.mjs'
import { loadStdlib } from '@reach-sh/stdlib'
import Identicon from 'react-identicons';
import MyAlgoConnect from '@randlabs/myalgo-connect'
import { ctcInfoStr } from '../utils'
import '../styles/card.css'

function Card({selectNFt,img,price, owner,name,description, largeCard}) {

    const reach = loadStdlib(process.env)
    const myAlgoConnect = new MyAlgoConnect()

    const [load, setLoad] = useState(false)

    const buyNFT = async() => {
        const [acc] = await myAlgoConnect.connect();
        setLoad(true)
        const ctc = acc.contract(backend, JSON.parse(ctcInfoStr));
        backend.buyer(ctc, this)
        nft = {
            creator: '0x1d205c359f2e9bca069bca7cd763dd97418f2544422ba421efed950d771d373c',
            metadata:'https://merkim.dev',
            owner: owner,
            price: reach.parseCurrency(price),
            royalty:4
        }
        window.location.reload()
    }

    const getNFT = () => {
        selectNFt({
            img,
            name,
            owner,
            description,
            price
        })
    }

    return (
        <div className={`card ${largeCard && 'largeCard'}`} >
            <img src={img} alt="" onMouseOver={getNFT}/>
            <h2>{name}</h2>
            <p className="price">{price} ALGO</p>
            {largeCard && <p>{description}</p>}
            <button onClick={buyNFT} disabled={load}>{!load?'Buy':'Loading...'}</button>
            <p className="ownerAddress"><span>Owner:{owner}</span></p>
            <span><Identicon string={owner} size={20}/></span>
        </div>
    )
}

export default Card