import React from 'react'
import mediaImageOne from "../images/mediaImage1.jpg"
import mediaImageTwo from "../images/mediaImage2.jpg"
import mediaImageThree from "../images/mediaImage3.jpg"
import mediaBackground from "../images/mediaBackground.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const MediaUpdate = () => {

    useGSAP(()=>{
        gsap.from(".Media-container > h3", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".Media-container > h3"
          }
        })
        gsap.from(".Media-container > h1", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".Media-container > h1"
          }
        })
        gsap.from(".media-box-1", {
          y: 100,
          delay: 1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".media-box-1"
          }
        })
        gsap.from(".media-box-2", {
          y: 100,
          delay: 1.3,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".media-box-2"
          }
        })
        gsap.from(".media-box-3", {
          y: 100,
          delay: 1.6,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".media-box-3"
          }
        })
        
        
      })


  return (
    <div className='Media-container' id='news'>
        <h3>LATEST</h3>
        <h1>Our Latest Media Update</h1>
        <div className="Media-container-items">


            <div className="media-box-1 media-boxes">
                
                <div className="date">
                    <FontAwesomeIcon icon={faCalendarDays} className = "calender" />
                    <p>Apr 17, 2022</p>
                </div>
                <h1>Self-Guided Driving & Tours Walk Of Greater City</h1>
                <div className="admin-comment">
                    <div className="admin">
                    <FontAwesomeIcon icon={faUser} className = "admin-icon" />
                    <p>Admin</p>
                    </div>
                    <div className="comment">
                    <FontAwesomeIcon icon={faComment} className= "comment-icon" />
                    <p>Comment</p>
                    </div>
                    </div>
                    <button>Read more</button>
            </div>


            <div className="media-box-2 media-boxes">
                
                <div className="date">
                    <FontAwesomeIcon icon={faCalendarDays} className = "calender" />
                    <p>Apr 16, 2022</p>
                </div>
                <h1>Assistance For Home & Properties Real Estate</h1>
                <div className="admin-comment">
                    <div className="admin">
                    <FontAwesomeIcon icon={faUser} className = "admin-icon" />
                    <p>Admin</p>
                    </div>
                    <div className="comment">
                    <FontAwesomeIcon icon={faComment} className= "comment-icon" />
                    <p>Comment</p>
                    </div>
                    </div>
                    <button>Read more</button>
            </div>


            <div className="media-box-3 media-boxes">
                
                <div className="date">
                    <FontAwesomeIcon icon={faCalendarDays} className = "calender" />
                    <p>Apr 15, 2022</p>
                </div>
                <h1>Long-term Vision Of Health & Attractive Facilty</h1>
                <div className="admin-comment">
                    <div className="admin">
                    <FontAwesomeIcon icon={faUser} className = "admin-icon" />
                    <p>Admin</p>
                    </div>
                    <div className="comment">
                    <FontAwesomeIcon icon={faComment} className= "comment-icon" />
                    <p>Comment</p>
                    </div>
                    </div>
                    <button>Read more</button>
            </div>


        </div>
    </div>

  )
}

export default MediaUpdate