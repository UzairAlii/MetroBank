import React from 'react'
import { useEffect, useState, useRef } from 'react'
import Headroom from 'react-headroom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import logo from "../images/logo.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnchorLink from 'react-anchor-link-smooth-scroll'

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

  const navRef = useRef()

  const ToggleNav = ()=> {
    navRef.current.classList.toggle("responsive-nav")
  }


  const [activeLink, setActiveLink] = useState("home")
  const [sideBar, setSideBar] = useState("")

  const handleMenuClick = (Menuname) => {
    setActiveLink(Menuname)
  }

  useGSAP(() => {
    gsap.from("header", {
      y: -100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "header"
      }
    })
    gsap.from("nav", {
      y: -100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "nav"
      }
    })



  })

  return (
    <div className='home-container' id='Home'>
      <header>
        <ul>
          <li>Career</li>
          <li>FAQ</li>
          <li>Rewards</li>
          <li>Media</li>
        </ul>
        <div className="connect">
          <div className="mail AA">
            <FontAwesomeIcon className='icons' icon={faEnvelope} />
            <p>info@example.com</p>
          </div>
          <div className="location AA">
            <FontAwesomeIcon className='icons' icon={faLocationDot} />
            <p>Find Nearest Branch</p>
          </div>
        </div>
      </header>
      <Headroom style={{ zIndex: 9999, boxShadow: "-1px 41px 78px -25px rgba(0, 0, 0, 0.579)" }}>
      <nav>
      <div className="logo">
        <AnchorLink className='anchor-link' offset={100} href='#Home'>
        <img src={logo} alt=""  onClick={()=> {handleMenuClick("home")}}/>
        </AnchorLink>
      </div>

      <div ref={navRef} className="navigation-links">
      <FontAwesomeIcon className='close' icon={faXmark} onClick={()=>{ToggleNav()}} />
        <ul>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#Home'>
              <p 
                className={activeLink === "home" ? "active" : ""} 
                onClick={() => { handleMenuClick("home") }}
              >
                Home
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#about'>
              <p 
                className={activeLink === "About" ? "active" : ""} 
                onClick={() => { handleMenuClick("About") }}
              >
                About
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#services'>
              <p 
                className={activeLink === "services" ? "active" : ""} 
                onClick={() => { handleMenuClick("services") }}
              >
                Services
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#Testimonials'>
              <p 
                className={activeLink === "testimonials" ? "active" : ""} 
                onClick={() => { handleMenuClick("testimonials") }}
              >
                Testimonials
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#news'>
              <p 
                className={activeLink === "news" ? "active" : ""} 
                onClick={() => { handleMenuClick("news") }}
              >
                News
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={100} href='#contact'>
              <p 
                className={activeLink === "contact" ? "active" : ""} 
                onClick={() => { handleMenuClick("contact") }}
              >
                Contact
              </p>
            </AnchorLink>
          </li>
        </ul>
      </div>

      <div className="Accounts">
        <button className='login'>Login</button>
        <button className='open-account'>Open Account</button>
      </div>
      <FontAwesomeIcon className='bars' icon={faBars} onClick={()=>{ToggleNav()}} />
    </nav>
      </Headroom>
    </div>
  )
}

export default Navbar