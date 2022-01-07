  
import React, { useState } from 'react'
import './style.css'

// PACKAGES
import { BiMenuAltRight } from "react-icons/bi"
import {  FaTimesCircle } from "react-icons/fa"


// IMAGES
import logo from '../../assets/ikons.png'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [navbar, setNavbar] = useState(false);
    // Changing the navbar color on scroll
    const changeBackground = () => {
      if(window.scrollY >= 80){
        setNavbar(true)
      }
      else{
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll', changeBackground)

    const styleMenu = {
        left: menu ? 0 : "-100%",
    }

    return (
        <header className='navbar'>
            <div className={navbar ? 'inner-navbar active' : 'inner-navbar'}>

                <div className="logo">
                    <a href='#logo'>
                        <img src={logo} alt="logo"/>
                    </a>
                </div>


                <div className="menu" onClick={() => setMenu(!menu)}>
                    <BiMenuAltRight /> 
                </div>

                <ul className="header-link" style={styleMenu} onClick={() => setMenu(!menu)}>
                    <li>
                        <a  href="/" className="link link-active" >Home</a>
                    </li>
                    <li>
                        <a href="/aboutus" className="link" >About Us</a>
                    </li>
                    <li>
                        <a href="/what_we_do" className="link" >What We do</a>
                    </li>
                    <li>
                        <a href="/hire" className="hire-btn" >Hire Us</a>
                    </li>

                    <li onClick={() => setMenu(!menu)}>
                        <FaTimesCircle className="close-menu" />
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar