import React, { useState } from 'react';
import EMIbg from "../images/emi-bg.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EMIcalculator = () => {

  useGSAP(()=>{
    gsap.from(".calculator > h3", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".calculator > h3"
      }
    })
    gsap.from(".calculator > h1", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".calculator > h1"
      }
    })
    gsap.from(".EMI-container > div img", {
      x: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".EMI-container > div img"
      }
    })
    gsap.from("#amount", {
      y: 100,
      delay: 1.1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#amount"
      }
    })
    gsap.from("#months", {
      y: 100,
      delay: 1.4,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#months"
      }
    })
    gsap.from("#interest", {
      y: 100,
      delay: 1.7,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#interest"
      }
    })
    gsap.from("#calculate", {
      y: 100,
      delay: 2.1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#calculate"
      }
    })
    gsap.from("#reset", {
      y: 100,
      delay: 2.4,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#reset"
      }
    })
    
    gsap.from("#result", {
      y: 100,
      delay: 2.7,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#result"
      }
    })
    
    
    
    
  })

  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [interest, setInterest] = useState('');
  const [result, setResult] = useState('');

  const calculateEMI = () => {
    const P = parseFloat(amount);
    const r = parseFloat(interest) / 12 / 100;
    const n = parseInt(months);

    if (!P || !r || !n) {
      alert('Please enter valid values for all fields');
      return;
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setResult(emi.toFixed(2));
  };

  const resetData = () => {
    setAmount('');
    setMonths('');
    setInterest('');
    setResult('');
  };

  return (
    <div className='EMI-container'>
      <div>
        <div className="calculator">
          <h3>CALCULATE LOAN</h3>
          <h1>EMI Calculator</h1>
          <div className="calculator-items">
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder='Loan amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="number"
              name="months"
              id="months"
              placeholder='Number of months'
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />
            <input
              type="number"
              name="interest"
              id="interest"
              placeholder='Interest rate'
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
            <div className="calculator-btns">
              <button id='calculate' onClick={calculateEMI}>Calculate</button>
              <button id='reset' onClick={resetData}>Reset</button>
            </div>
            <input
              type="number"
              name="result"
              id="result"
              placeholder='Monthly installment is'
              value={result}
              disabled
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
        <img src={EMIbg} alt="" />
      </div>
    </div>
  );
}

export default EMIcalculator;
