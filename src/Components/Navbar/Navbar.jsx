import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import Menu from '../../assets/menubar.png'


const  Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='desktopmenulistitem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true}  duration={500} offset={-50} className='desktopmenulistitem'>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true}  duration={500} offset={-50} className='desktopmenulistitem'>Portfolio</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}  duration={500} offset={-170} className='desktopmenulistitem'>About</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-50}className='desktopmenulistitem'>Contact</Link>
            </div>
            <button className="desktopmenubtn" onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior:"smooth"});
            }}>
                Contact Me
            </button>

            <img src={Menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='listitem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true}  duration={500} offset={-50} className='listitem' onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true}  duration={500} offset={-50} className='listitem' onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}  duration={500} offset={-170} className='listitem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-50}className='listitem' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    
  )
}

export default Navbar
