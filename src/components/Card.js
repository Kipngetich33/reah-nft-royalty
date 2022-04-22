import { useState } from 'react'
import Identicon from 'react-identicons';
import '../styles/card.css'

function Card({selectNFt,img,price, owner,name,description, largeCard}) {

    const [load, setLoad] = useState(false)

    const buyNFT = async() => {
        setLoad(true)
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