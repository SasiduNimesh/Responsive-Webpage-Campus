import React from 'react'
import './home.css'
import btnImg from '../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='home container'>
        <div className='hero-text'>
            <h1>We encourage students to own their journey and be accountable for their success</h1>
            <p>
            Creating, transforming and disseminating knowledge through teaching, 
            learning and research to fulfil the needs of the dynamic stakeholders 
            and to meet new challenges while upholding the human values for the 
            sustainable development of the region, 
            nation and globe with a good governance.
            </p>
            <button className='btn'>Explore more<img src={btnImg} alt='' /></button>
        </div>
    </div>
  )
}

export default Home