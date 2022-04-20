import React from 'react'
import '../styles/mint.css'
import { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import {ethers} from 'ethers'
import Web3Modal from 'web3modal'

function Mint() {  

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState()
  const [royalty, setRoyalty] = useState(0)
  const [thumbnail, setThumbnail] = useState('')
  const [load, setLoad] = useState(false)

  const uploadImage = (e) => {
    e.preventDefault()
    const url = URL.createObjectURL(e.target.files[0])
    setThumbnail(url)
    setImg(e.target.files)
  }
    
  const submitData = async(e) => {
    e.preventDefault()
    setLoad(true)

    if(!name || !description || !price || !royalty || img.length == 0) {
      console.log('Not enough data')
      return
    }

    /*const web3modal = new Web3Modal()
    const connection = await web3modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()*/ 
    const storageKey = process.env.REACT_APP_STORAGE_KEY 
    console.log(storageKey)
    /*const client = new Web3Storage({ token: storageKey })

    const imgCID = await client.put([new File([new Blob([img[0]])], `${name}`)])
    const imgLink = `https://${imgCID}.ipfs.dweb.link/${name}`
    const nftData = new Blob(
      [JSON.stringify({
        name,
        description,
        imgLink,
        })], { type:'application/json' }
    ) 
    const nftCID = await client.put([new File([nftData],'metadata' )])*/
  }

  return (
    <div className='mint'>
      <form onSubmit={submitData}>
        <input type="text" onChange={e => setName(e.target.value)}  placeholder='Enter name...'/>
        <input type="text" onChange={e => setDescription(e.target.value)} placeholder='Enter description...'/>
        <input type="number" step={0.1} onChange={e => setPrice(e.target.value)} placeholder='Enter price...'/>
        <input type="number" step={1} onChange={e => setRoyalty(e.target.value)} placeholder='Enter percentage'/>
        <input type="file" onChange={uploadImage} />
        {thumbnail && <img src={thumbnail} alt="nft" />}
        <button type='submit'>Mint </button>
      </form>
    </div>
  )
}

export default Mint