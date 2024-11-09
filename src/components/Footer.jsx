import React from 'react'
import logo from "../images/logo-2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerBg from "../images/shape-bg-4.png"


const Footer = () => {
  return (
    <div className='footer'>


      <div className="footer-header">
        <div className="headings">
          <h1> Subscribe us to Recieve</h1>
          <h1>Latest Updates</h1>
        </div>
        <div className="input-email">
          <input type="email" placeholder='Enter Your Email' />
          <button>Subscribe Now</button>
        </div>
      </div>


      <div className="footer-items">
        <img src={footerBg} id='left-bg'/>



        <div className="footer-box-1 footer-boxes">
          <img src={logo} />
          <p>Tincidunt neque pretium lectus donec risus. Mauris mi tempor nunc orc leo consequat vitae erat gravida lobortis nec et sagittis.</p>
          <div className="all-footer-icons">
            <div className="facebook footer-icons">
              <FontAwesomeIcon className='f-icon' icon={faFacebookF} />
            </div>
            <div className="twitter footer-icons">
              <FontAwesomeIcon className='f-icon' icon={faTwitter} />
            </div>
            <div className="insta footer-icons">
              <FontAwesomeIcon className='f-icon' icon={faInstagram} />
            </div>
          </div>
        </div>




        <div className="footer-box-2 footer-boxes matched">
          <h2>Explore</h2>
          <ul>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Career Detail </li>
            <li>FaQ's</li>
          </ul>
        </div>




        <div className="footer-box-3 footer-boxes matched">
          <h2>Usefull Links</h2>
          <ul>
            <li>Credit Card </li>
            <li>Saving Account</li>
            <li>Digital Gift Cards</li>
            <li>Apply for Loans</li>
            <li>Mobile Application</li>
          </ul>
        </div>




        <div className="footer-box-4 footer-boxes">
          <h2>Find Our Branch & ATM</h2>
          <label for="branches"></label>
          <select className='footer-inputs' id="branches" name="branches">
            <option value="Branch">Branch</option>
            <option value="California">California</option>
            <option value="Mancity">Man city</option>
            <option value="newyork ">New York</option>
          </select>
          <input className='footer-inputs' type="text" placeholder='Location' />
          <button>Find on map</button>
        </div>
        <img src={footerBg} id='right-bg' />
      </div>
        <div className="footer-last">
          <p>© Copyright 2023 by <span>Syed Uzair Ali. </span> All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer