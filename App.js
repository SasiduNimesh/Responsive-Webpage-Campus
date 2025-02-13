import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoPlayer from './components/vedio/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Home />
      <div className='container'>
        <Title subTitle='Our Program' title='What We Offer'/>
        <Programs /> 
        <About setPlayState={setPlayState}/> 
        <Title subTitle='Gallery' title='Campus Potos'/>
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What student says'/>
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in touch'/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App