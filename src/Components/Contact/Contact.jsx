import React, { useRef } from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
        <section>
            <div id="contact">
                <h1 className='contactpagetitle'>Contact me</h1>
                <span className='contactdesc'>Please fill out the form below to discuss my work opportunities.</span>
                <form action="" className='contactform'>
                    <input type="text" className='name' placeholder='Your Name' />
                    <input type="email" className='email' placeholder='Your Email' />
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button className='submitbtn' type='submit'>Submit</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact
