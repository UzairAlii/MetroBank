import React from 'react'
import creditOne from "../images/card-1.jpg";
import creditTwo from "../images/card-2.jpg";
import creditThree from "../images/card-3.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const creditCard = () => {

    useGSAP(()=>{
        gsap.from(".credit-card-container > h3", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".credit-card-container > h3"
          }
        })
        gsap.from(".credit-card-container > h1", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".credit-card-container > h1"
          }
        })
        gsap.from(".credit-card-one", {
          x: -100,
          delay: 1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".credit-card-one"
          }
        })
        gsap.from(".credit-card-two", {
          x: -300,
          delay: 1.3,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".credit-card-two"
          }
        })
        gsap.from(".credit-card-three", {
          x: -500,
          delay: 1.6,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".credit-card-three"
          }
        })
        
        
        
      })

  return (
    <div className='credit-card-container'>
      
      <div className="credit-headings">
        <h3>OUR CREDIT CARD</h3>
        <h1>Credit Cards We Provides</h1>
        </div>

        <div className="credit-card-items">

            <div className="credit-card-one credit-cards">
                <img src={creditOne} alt="" />
                <h1>Visa Silver Card</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipiscing elit. Donec felis tincidunt</p>
                <button className="credit-button">Apply for Card</button>
            </div>

            <div className="credit-card-two credit-cards">
                <img src={creditTwo} alt="" />
                <h1>Mastercard Gold Card</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipiscing elit. Donec felis tincidunt</p>
                <button className="credit-button">Apply for Card</button>
            </div>

            <div className="credit-card-three credit-cards">
                <img src={creditThree} alt="" />
                <h1>Visa Platinum Card</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <p>adipiscing elit. Donec felis tincidunt</p>
                <button className="credit-button">Apply for Card</button>
            </div>

        </div>
    </div>
  )
}

export default creditCard