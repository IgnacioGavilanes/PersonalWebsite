import './Navbar.scss'
import React, {useState} from 'react'
import {CgMenu, CgClose} from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import {Link, animateScroll as scroll} from 'react-scroll'


export const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);//THIS IS FOR WHEN I CLICK IN MOBILE MENU AND AUTOMATICALLY SCROLL TO ELEMENT CLICKED

  return (
    <nav id='navbar'>
        <div id='logoWrapper'>
            <p className='logo hover-logo'>iGNACIO j.<br/>gAVILANES</p>
        </div>

        <div id='burgerWrapper'>
            {click ? 
                <CgClose className='burger' onClick={handleClick}/> 
                : 
                <CgMenu  className='burger' onClick={handleClick}/>
            }
        </div>

        <div className={click ? 'navMenu mobileActive': 'navMenu mobileInactive'}> 
            <ul className='mobileMarginTop'> 
                <li><Link to='navbar' className='navLink' smooth={true} duration={1500} onClick={closeMobileMenu} activeClass="linkTest" spy={true}>Home</Link></li>
                <li><Link to='about' className='navLink' smooth={true} duration={1500} onClick={closeMobileMenu} activeClass="linkTest" spy={true}>About</Link></li>
                <li><Link to='education' className='navLink' smooth={true} duration={1500} onClick={closeMobileMenu} activeClass="linkTest" spy={true}>Education</Link></li>
                <li><Link to='contact' className='navLink' smooth={true} duration={1500} onClick={closeMobileMenu} activeClass="linkTest" spy={true}>Contact</Link></li>
                <li className='inNavLogoWrapper'><a href="https://www.linkedin.com/in/ignacio-gavilanes/" rel="noreferrer" target="_blank">< FaLinkedinIn className='inNavLogo'/></a></li>
            </ul>
        </div>

    </nav>
  )
}
