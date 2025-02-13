import React from 'react'
import program1 from '../assets/program-1.png'
import program2 from '../assets/program-2.png'
import program3 from '../assets/program-3.png'
import programIcon1 from '../assets/program-icon-1.png'
import programIcon2 from '../assets/program-icon-2.png'
import programIcon3 from '../assets/program-icon-3.png'
import './programs.css'

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program1} alt='' />
            <div className='caption'>
                <img src={programIcon1} alt='' />
                <p>Graduation Diploma<br />Duration: 3 Years</p>
            </div>
        </div>
        <div className='program'>
            <img src={program2} alt='' />
            <div className='caption'>
                <img src={programIcon2} alt='' />
                <p>Graduation Degree<br />Duration: 4 Years</p>
            </div>
        </div>
        <div className='program'>
            <img src={program3} alt='' />
            <div className='caption'>
                <img src={programIcon3} alt='' />
                <p>Master Graduation<br />Duration: 5-6 Years</p>
            </div>
        </div>
    </div>
  )
}

export default Programs