import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/burgerhome.avif'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' >
        <h1>ZACH'S BURGERS</h1>
        <p>BEST BURGERS IN TOWN</p>
        <Link to='../menu'>
        <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home