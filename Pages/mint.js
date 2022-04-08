import React from 'react'
import '../styles/mint.css'

function Mint() {
    const submitData = (e) => {
        e.preventDefault()
    }
  return (
    <div className='mint'>
        <form onSubmit={submitData}>
            <input type="text" placeholder='Enter name...'/>
            <input type="text" placeholder='Enter description...'/>
            <input type="number" placeholder='Enter price...'/>
            <input type="number" placeholder='Enter percentage'/>
            <input type="file" />
            <button type='submit'>Mint </button>
        </form>
    </div>
  )
}

export default Mint