import React, { useEffect } from 'react'
import '../styles/mint.css'
import { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { useNavigate } from 'react-router-dom'
import * as backend from '../../build/index.main.mjs';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

function Mint() {  

  const reach = loadStdlib(process.env);

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState()
  const [royalty, setRoyalty] = useState(0)
  const [thumbnail, setThumbnail] = useState('')
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  const uploadImage = (e) => {
    e.preventDefault()
    const url = URL.createObjectURL(e.target.files[0])
    setThumbnail(url)
    setImg(e.target.files)
  }
    
  const submitData = async(e) => {
    e.preventDefault()
    if(!name || !description || !price || !royalty || img.length == 0) {
      console.log('Not enough data')
      return
    }
    setLoad(true)
    try{
      const storageKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQ4M0U1RGEwRGJhODE1YWYyOTk5NDU4QjI0QjkwRGFGYzEwNzZCMEQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTA0MTY3ODg3OTksIm5hbWUiOiJuZnQtd2l0aC1yb3lhbHR5In0.R-K1cAJgVvU63YID7lekYrJQ0wx0tlgeOMkmWNb-t0w'
      const client = new Web3Storage({ token: storageKey })

      const imgCID = await client.put([new File([new Blob([img[0]])], `${name}`)])
      const imgLink = `https://${imgCID}.ipfs.dweb.link/${name}`
      const nftData = new Blob(
        [JSON.stringify({
          name,
          description,
          imgLink,
          })], { type:'application/json' }
      ) 
      const nftCID = await client.put([new File([nftData],'metadata' )])
  
      //interact.metadata = nftCID
      //interact.price = price 
      //interact.royalty = royalty
      //navigate('/')
      

    } catch(e) {
      setLoad(false)
    }

  }

  /*useEffect(() => {
    const getFundedAccount = async() => {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      //await reach.fundFromFaucet(acc, reach.parseCurrency(10));
      console.log(bal)

      /*reach.setWalletFallback(reach.walletFallback({
        providerEnv: "TestNet", WalletConnect
      }))

    }

    getFundedAccount()
    
  }, [])*/

  return (
    <div className='mint'>
      <form onSubmit={submitData}>
        <input type="text" onChange={e => setName(e.target.value)}  placeholder='Enter name...'/>
        <input type="text" onChange={e => setDescription(e.target.value)} placeholder='Enter description...'/>
        <input type="number" step={0.1} onChange={e => setPrice(e.target.value)} placeholder='Enter price...'/>
        <input type="number" step={1} onChange={e => setRoyalty(e.target.value)} placeholder='Enter percentage'/>
        <input type="file" onChange={uploadImage} />
        {thumbnail && <img src={thumbnail} alt="nft" />}
        <>{load ? <button>Loading...</button> : <button type='submit'>Mint </button> }</> 
      </form>
    </div>
  )
}

export default Mint