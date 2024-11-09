import React from 'react'
import ArrowOne from "../images/arrow-1.png";
import ArrowTwo from "../images/arrow-2.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OpenAccount = () => {

  useGSAP(()=>{
    gsap.from(".open-account-container > h3", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".open-account-container > h3"
      }
    })
    gsap.from(".open-account-container > h1", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".open-account-container > h1"
      }
    })
    gsap.from(".circle-1", {
      x: -100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle-1"
      }
    })
    gsap.from(".circle-2", {
      x: -300,
      delay: 1.3,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle-2"
      }
    })
    gsap.from(".circle-3", {
      x: -500,
      delay: 1.6,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle-3"
      }
    })
    
    
  })

  return (
    <div className="open-account-container">
      <div>
        <h3>OUR PROCESS</h3>
        <h1>Open Bank Accounts</h1>
        </div>

        <div className="open-account-items">

            <div className="circle-1 circles">
                <div className='dahsed-border'>
                <div className="step-circle">Step 01</div>
                </div>
                <h1>Fill In The Required Form</h1>
                <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>

            <img src={ArrowOne} alt="" />

            <div className="circle-2 circles">
            <div className='dahsed-border'>
            <div className="step-circle">Step 02</div>
            </div>
            <h1>Submit All Your Documents</h1>
            <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>

            <img src={ArrowTwo} alt="" />

            <div className="circle-3 circles">
                <div className='dahsed-border'>
            <div className="step-circle">Step 03</div>
            </div>
            <h1>Get Your Desire Account</h1>
            <p>Amet minim mollit no duis deserunt ulamco.</p>
            </div>
            
        </div>
    </div>
  )
}

export default OpenAccount

