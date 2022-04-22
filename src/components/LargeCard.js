import Web3Modal from 'web3modal'
import {ethers} from 'ethers'
import { useState } from 'react'
import Identicon from 'react-identicons';
import '../styles/card.css'

function LargeCard({img,price, owner,name,description}) {

    return (
        <div className='card largeCard' >
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p className="price">{price} ALGO</p>
            <p>{description}</p>
            <p className="ownerAddress"><span>Owner:{owner}</span></p>
            <span><Identicon string={owner} size={20}/></span>
        </div>
    )
}

export default LargeCard