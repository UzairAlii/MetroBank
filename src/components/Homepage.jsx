import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'
import Image2 from "../images/image2.avif";
import Image3 from "../images/image3.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  useGSAP(()=>{
    gsap.from(".home-page-items h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-page-items h1"
      }
    })
    gsap.from(".home-page-items p", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-page-items p"
      }
    })
    gsap.from(".home-page-items button", {
      y: 100,
      delay: 1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-page-items button"
      }
    })
    gsap.from(".home-page-bottom", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".home-page-bottom"
      }
    })
  })



  const images = [Image2, Image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [branches, setBranches] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (happyClients < 50) {
      setTimeout(() => setHappyClients((prev) => (prev += 1)), 18);
    }
  }, [happyClients]);

  useEffect(() => {
    if (transactions < 90) {
      setTimeout(() => setTransactions((prev) => (prev += 1)), 18);
    }
  }, [transactions]);

  useEffect(() => {
    if (branches < 40) {
      setTimeout(() => setBranches((prev) => (prev += 1)), 18);
    }
  }, [branches]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 1000); // Match the transition duration
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="home-page-container">
      <div className={`home-page ${fade ? 'fade' : ''}`} style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}>
        <div className="home-page-overlay">
          <div className="home-page-items">
            <h1>Open Your Current Account Online</h1>
            <p>This statistic is based on our average personal current account online opening time from the last 12 months.</p>
            <button className='create-account'>Create account</button>
          </div>
        </div>
      </div>

      <div className="home-page-bottom">
        <div className="home-page-bottom-items">
          <div className="happy-clients boxes">
          <div className="boxes-icons">
              <FontAwesomeIcon className='client-icon bottom-icons' icon={faUserGroup} />
              </div>
            <div className="boxes-items">
              <p>{happyClients}K+</p>
              <span>Happy Clients</span>
            </div>
          </div>
          <div className="total-transactions boxes">
          <div className="boxes-icons T-B-Icons-div">
          <FontAwesomeIcon className='transaction-icon T-B-Icons bottom-icons' icon={faMoneyBillTransfer} />
              </div>
            <div className="boxes-items T-B-Items">
              <p>{transactions}Bn</p>
              <span>Total Transactions</span>
            </div>
          </div>
          <div className="branches boxes">
          <div className="boxes-icons T-B-Icons-div">
          <FontAwesomeIcon className='branches-icon T-B-Icons bottom-icons' icon={faLandmark} />
              </div>
            <div className="boxes-items T-B-Items">
              <p>{branches}+</p>
              <span>Branches</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
