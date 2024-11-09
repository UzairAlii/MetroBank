import React from 'react'
import image1 from "../images/service-1.jpg";
import image2 from "../images/service-2.jpg";
import image3 from "../images/service-3.jpg";
import image4 from "../images/service-4.jpg";
import image5 from "../images/service-5.jpg";
import image6 from "../images/service-6.jpg";
import image7 from "../images/service-7.jpg";
import image8 from "../images/service-8.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Services = () => {

  useGSAP(()=>{
    gsap.from(".service-container > h3", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".service-container > h3"
      }
    })
    gsap.from(".service-container > h1", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".service-container > h1"
      }
    })
    gsap.from(".one", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".one"
      }
    })
    gsap.from(".two", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".two"
      }
    })
    gsap.from(".three", {
      y: 100,
      delay: 1.1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".three"
      }
    })
    gsap.from(".four", {
      y: 100,
      delay: 1.4,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".four"
      }
    })
    gsap.from(".five", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".five"
      }
    })
    gsap.from(".six", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".six"
      }
    })
    gsap.from(".seven", {
      y: 100,
      delay: 1.1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".seven"
      }
    })
    gsap.from(".eight", {
      y: 100,
      delay: 1.4,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".eight"
      }
    })
    
    
    
  })

  return (
    <div className="service-container" id='services'>
      <h3>OUR SERVICES</h3>
      <h1>Online Banking at Fingertips</h1>
      <div className="services-items">

        <div className="service-boxes one">
          <div className="shape"></div>
          <img src={image1} className='service-imgs' />
          <div>
          <h2>Digital Banking</h2>
          <ul>
            <li>Bank & savings accounts</li>
            <li>Credit cards</li>
            <li>Personal loans</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes two">
          <div className="shape"></div>
          <img src={image2} className='service-imgs' />
          <div>
          <h2>Mobile & Web Banking</h2>
          <ul>
            <li>Instant Access</li>
            <li>Savings Fixed Term</li>
            <li>Savings Instant</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes three">
          <div className="shape"></div>
          <img src={image3} className='service-imgs' />
          <div>
          <h2>Insurance Policies</h2>
          <ul>
            <li>Pet insurance</li>
            <li>Transport Insurance</li>
            <li>Accident insurance</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes four">
          <div className="shape"></div>
          <img src={image4} className='service-imgs' />
          <div>
          <h2>Home & Property Loan</h2>
          <ul>
            <li>Residential Mortgages</li>
            <li>Buy-to-let Mortgages</li>
            <li>Building Mortgages</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes five">
          <div className="shape"></div>
          <img src={image5} className='service-imgs' />
          <div>
          <h2>All Bank Account</h2>
          <ul>
            <li>instant Access Savings</li>
            <li>Instant Access Cash</li>
            <li>Young Savers Account</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes six">
          <div className="shape"></div>
          <img src={image6} className='service-imgs' />
          <div>
          <h2>Borrowing Accounts</h2>
          <ul>
            <li>Bank Credit Card</li>
            <li>Setter personal loan</li>
            <li>Overdraft</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes seven">
          <div className="shape"></div>
          <img src={image7} className='service-imgs' />
          <div>
          <h2>Private Banking</h2>
          <ul>
            <li>Dedicated personal service</li>
            <li>Specialist teams</li>
            <li>Tailored products</li>
          </ul>
          </div>
        </div>

        <div className="service-boxes eight">
          <div className="shape"></div>
          <img src={image8} className='service-imgs' />
          <div>
          <h2>Fixed Term Accounts</h2>
          <ul>
            <li>Fixed Term Saving</li>
            <li>Fixed Rate Cash</li>
            <li>Resume your Current</li>
          </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services