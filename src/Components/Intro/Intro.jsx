import React from 'react'
import './Intro.css'
import bg from '../../assets/bg1.png'
import { Link } from 'react-scroll'
import btnimg from '../../assets/hire.png'

const Intro = () =>{

  return (
    <section id='intro'>
        <div className="introcontent">
            <span className='hello'>Hello</span>
            <span className="introtext"> I'm 
            <span className="introname">
            &nbsp; Aniket
            </span>
            <br />
            Front end Developer 
            </span>
            <p className="intropara">I am a Skilled Front end Developer With Experience in creating <br /> visually appealing
           and user-friendly websites.</p>
            <button className='btn'><img src={btnimg} alt="" className='btnimg'/><a href='src/assets/Aniket (Resume).pdf' target='_blank'>Hire Me</a></button>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default Intro
