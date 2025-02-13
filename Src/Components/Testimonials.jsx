import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.jpg'

const Testimonials = () => {
    const slider = useRef();
    
    let tx = 0;
const slideForward = () => {
    if(tx > -75){
        tx -= 25;
        slider.current.style.transform = `translateX(${tx}%)` ;
    }
}

const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)` ;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' 
        onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' 
        onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_1} alt='' />
                            <div>
                                <h3>Nimnavi Edirisinghe</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        I wish all the Professors are as articulated, 
                        intelligent and resourceful as you. Your lectures are precise, concise and detailed. You made the course look so easy despite the technicalities involved. 
                        Please keep it up.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_2} alt='' />
                            <div>
                                <h3>Janith Franando </h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        It was an immense pleasure working with you. 
                        During last one and a half years, I found you to be 
                        an out standing professor with immense Knowledge, 
                        easily approachable, friendly, 
                        and most importantly a man of character.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_3} alt='' />
                            <div>
                                <h3>Wihagi Jayasiri</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        I would like to thank you for being my supervisor. 
                        I believe in your word that you don't fail student if they attended all the classes. From my opinion, you’re the best lecturer in the university and if I have a chance I would come back and study with you again. 
                        Thank you very much.
                        </p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className="user-info">
                            <img src={user_4} alt='' />
                            <div>
                                <h3>Amila Kavinda</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                        Being an international student and also being one 
                        who left the school system many years after my first degree, I was too scared on how I was going to cope with the MSc. Technology Management but your lecturing strategies and encouraging words 
                        to students have built that confidence in me. 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials