import React from 'react'
import './about.css'
import aboutImg from '../assets/about.png'
import playIcon from '../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={aboutImg} alt='' className='about-img' />
            <img src={playIcon} alt='' className='play-icon' 
            onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders</h2>
            <p>In its formative years the Trincomalee Campus functioned as an Affiliated University College (AUC) operating under the umbrella 
            of affiliated colleges funded by the University Grants Commission
            in the early nineties to help those to whom the conventional universities closed their doors. 
            The Trincomalee Affiliated University College, in its turn, conducted two diploma programmes viz. 
            Diploma in English and Diploma in Accountancy and Finance, the former under the supervision of the University of Sri Jayewardenepura and the later 
            under the supervision of the Eastern University, Sri Lanka.</p>
            <p>When the affiliated university college system was abolished, Trincomalee AUC found itself vested with the Eastern University and the two degree programmes
            initially conducted here then under two different faculties of the Eastern University, Sri Lanka had as their fortunate forerunners the diploma holders of the AUC.</p>
        </div>
    </div>
  )
}

export default About