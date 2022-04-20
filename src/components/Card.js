import Web3Modal from 'web3modal'
import {ethers} from 'ethers'
import { useState } from 'react'
import {IconCircle} from '@tabler/icons'
import Identicon from 'react-identicons';
import '../styles/Card.css'

function Card({selectNFt,img,price, owner,name,description}) {

    const [load, setLoad] = useState(false)

    const buyNFT = async() => {
        setLoad(true)
        const web3modal = new Web3Modal()
        const connection = await web3modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        //Add something here 
        window.location.reload()
    }

    const getNFT = () => {
        selectNFt({
            img,
            name,
            owner
        })
    }

    return (
        <div className="card" >
            <img src={img} alt="" onMouseOver={getNFT}/>
            <h2>{name}</h2>
            <p className="price">{price} MATIC</p>
            <button onClick={buyNFT} disabled={load}>{!load?'Buy':<IconCircle className='move'/>}</button>
            <p className="ownerAddress"><span>Owner:{owner}</span></p>
            <span><Identicon string={owner} size={20}/></span>
        </div>
    )
}

export default Card