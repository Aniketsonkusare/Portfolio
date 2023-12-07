import React from 'react'
import Portfolio1 from '../../assets/FitnessClub.mp4'
import Portfolio2 from '../../assets/FoodDemo.mp4'
import Portfolio3 from '../../assets/spotify.mp4'
import Portfolio4 from '../../assets/calculator.mp4'
import Portfolio5 from '../../assets/portfolio5.mp4'
import Portfolio6 from '../../assets/password.mp4'
import './work.css'

const Works = () => {   

  return (
    <section id='works'>
        <h2 className='worktitle'>My Portfolio</h2>
        <span className='workdesc'>I take pride in paying attention to the smallest details and making sure that my work is perfect. i am excited to bring my skills and experience to help my job achieve their goals and create a strong online presence.</span>

        <div className="worksimages">
            <video src={Portfolio1} controls className='worksimage'></video>
            <video src={Portfolio2} controls className='worksimage'></video>
            <video src={Portfolio3} controls className='worksimage'></video>
            <video src={Portfolio4} controls className='worksimage'></video>
            <video src={Portfolio5} controls className='worksimage'></video>
            <video src={Portfolio6} controls className='worksimage'></video>
        </div>

        <a href="https://github.com/Aniketsonkusare" className='workbtn'>See More</a>       
    </section>
  )
}

export default Works
