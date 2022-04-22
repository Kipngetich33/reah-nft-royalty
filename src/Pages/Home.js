import React, { useState } from 'react'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import Identicon from 'react-identicons';
import Card from '../components/Card'
import LargeCard from '../components/LargeCard'
import '../styles/home.css'

function Home() {

  const [selectedNFT, setSelectedNFT] = useState({
    img: 'https://publish.one37pm.net/wp-content/uploads/2021/02/how-to-buy-a-cryptopunk_0001_03.jpg?fit=750%2C500',
    name:"Noogler punk",
    owner:'0x00000000000000000000000000000',
    description:'lorem ipusm dissile dolorem portura nartro reveress',
    price:0.05
  })
  const [address, setAddress] = useState('')

  const connectWallet = async() => {
    const myAlgoConnect = new MyAlgoConnect();
    const accountsSharedByUser = await myAlgoConnect.connect();
    setAddress(accountsSharedByUser[0].address)
  }

  return (
    <div className='home'>
      <nav>
        <h1>TREE</h1>
        <section>
          {!address && <button onClick={connectWallet}>Connect wallet</button>}
          {address && <Identicon string={address} size={20}/>}
        </section>
        <a href="/mint">+</a>
      </nav>
      <div className='board'>
        <div className='board__left'>
          <Card selectNFt={setSelectedNFT} img={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} price={0.0005} owner={'0xhbbbq9726585316938679464576q48041769'} name ={'The homogeneous background'} description={'Hello prople I wanted to have lorem ipsum here '}/>
          <Card selectNFt={setSelectedNFT} img={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} price={0.25} owner={'0xhbbbq9726585316938679464576q48041769'} name ={'The homogeneous background'} description={'Hello prople I wanted to have lorem ipsum here '}/>
          <Card selectNFt={setSelectedNFT} img={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'} price={0.05} owner={'0xhbbbq9726585316938679464576q48041769'} name ={'The homogeneous background'} description={'Hello prople I wanted to have lorem ipsum here '}/>
        </div>
        <div className='board__right'>
        <LargeCard img={selectedNFT.img} owner={selectedNFT.owner} price={selectedNFT.price} name ={selectedNFT.name} description={selectedNFT.description} />
        </div>
      </div>
    </div>
  )
}

export default Home