import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutImg from "../images/about-img.jpg";
import humanOne from "../images/human-1.png";
import humanTwo from "../images/human-2.png";
import humanThree from "../images/human-3.png";
import humanFour from "../images/human-4.png";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(()=>{
    gsap.from(".L-H-S img", {
      x: -100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".L-H-S img"
      }
    })
    gsap.from(".L-H-S .experience-box", {
      x: -200,
      delay: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".L-H-S .experience-box"
      }
    })
    gsap.from(".L-H-S .ranking-box", {
      x: -200,
      delay: 1.3,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".L-H-S .ranking-box"
      }
    })
    gsap.from(".R-H-S h3", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S h3"
      }
    })
    gsap.from(".R-H-S > h1", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S > h1"
      }
    })
    gsap.from(".R-H-S > p", {
      y: 100,
      delay: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S > p"
      }
    })
    gsap.from(".R-H-S .solutions", {
      y: 100,
      delay: 1.2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S .solutions"
      }
    })
    gsap.from(".R-H-S .success", {
      y: 100,
      delay: 1.5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S .success"
      }
    })
    gsap.from(".R-H-S button", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".R-H-S button"
      }
    })
    
  })


  return (
    <div className='about-container' id='about'>
      <div className="L-H-S">
        <img src={aboutImg} />

        <div className="experience-box">
          <div>
            <h1>25+</h1>
            <p>Years</p>
          </div>
          <p>of Experience in the Finance Service</p>                                                        
        </div>

        <div className="ranking-box">
          <div className="stars-box">
          <FontAwesomeIcon className='stars' icon={faStar} />
          <FontAwesomeIcon className='stars' icon={faStar} />
          <FontAwesomeIcon className='stars' icon={faStar} />
          <FontAwesomeIcon className='stars' icon={faStar} />
          <FontAwesomeIcon className='stars' icon={faStar} />
          </div>
          <p>5 Star Rating Bank</p>
          <div className="clients-images">
            <img src={humanOne}/>
            <img src={humanTwo}/>
            <img src={humanThree}/>
            <img src={humanFour}/>
          </div>
        </div>

      </div>
      <div className="R-H-S">
        <h3>About Us</h3>
        <h1>Financial Guidance for Every Stage of Life.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>

        <div className='solutions about-boxes'>
          <div className="dollar-icon">
            <div>
          <FontAwesomeIcon className='faDollarSign' icon={faDollarSign} />
            </div>
          </div>
          <div>
          <h1>Solution Focused</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
          </div>
        </div>

        <div className='success about-boxes'>
          <div className="tick-icon">
            <div>
            <FontAwesomeIcon className='faCheck' icon={faCheck} />
            </div>
          </div>
          <div>
          <h1>99.99% Success</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
          </div>
        </div>

        <button className='discover-btn'>Discover More</button>


      </div>

    </div>
  )
}

export default About