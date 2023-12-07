import React from 'react'
import './skills.css'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import Js from '../../assets/js.png'
import Bootstrap5 from '../../assets/bootstrap5.png'
import Reactjs from '../../assets/reactjs.png'
import Redux from '../../assets/redux.png'
import Firebase from '../../assets/firebase.png'
import Tailwindcss from '../../assets/tailwind.png'

function Skills() {
  return (
    <>
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>I am a skilled and Passionate Front end Developer With Experience in creating visually appealing and user-friendly Website. I have a strong Understanding of website design. I am a proficient in HTML,CSS and Javascript as well as Bootstrap5 and React js
            </span>
            <div className="skills">
                <div className="skill">
                    <img src={HTML} alt="" className="skillimg" />
                    <div className="
                    ">
                        <h2>HTML5</h2>
                        <progress value={90} max={100} className='pro'>90%</progress>
                        <label htmlFor="">90%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={CSS} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>CSS3</h2>
                        <progress value={80} max={100} className='pro'>80%</progress>
                        <label htmlFor="">80%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Js} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>Javascript</h2>
                        <progress value={70} max={100} className='pro'>70%</progress>
                        <label htmlFor="">70%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Bootstrap5} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>Bootstrap5</h2>
                        <progress value={85} max={100} className='pro'>85%</progress>
                        <label htmlFor="">85%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Reactjs} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>React js</h2>
                        <progress value={80} max={100} className='pro'>80%</progress>
                        <label htmlFor="">80%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Redux} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>Redux</h2>
                        <progress value={50} max={100} className='pro'>50%</progress>
                        <label htmlFor="">50%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Firebase} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>Firebase</h2>
                        <progress value={50} max={100} className='pro'>50%</progress>
                        <label htmlFor="">50%</label>
                    </div>
                </div>
                <div className="skill">
                    <img src={Tailwindcss} alt="" className="skillimg" />
                    <div className="skilltext">
                        <h2>Tailwindcss</h2>
                        <progress value={60} max={100} className='pro'>60%</progress>
                        <label htmlFor="">60%</label>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Skills
