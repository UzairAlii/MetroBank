import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faStar } from '@fortawesome/free-solid-svg-icons';
import clientOne from "../images/client-1.png";
import clientTwo from "../images/client-2.png";
import clientThree from "../images/human-1.png";
import clientFour from "../images/human-2.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {

    useGSAP(()=>{
        gsap.from(".left-side", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".left-side"
          }
        })
        gsap.from(".right-side", {
          y: 100,
          delay: 1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".right-side"
          }
        })
        
        
        
      })


        const reviewContainerRef = useRef(null);
      const indexRef = useRef(0);

      const scrollReviews = (direction) => {
        const reviewContainer = reviewContainerRef.current;
        if (direction === 'left') {
          if (indexRef.current > 0) {
            indexRef.current -= 1;
          }
        } else if (direction === 'right') {
          if (indexRef.current < 3) {
            indexRef.current += 1;
          }
        }
        reviewContainer.style.transition = 'transform 1s ease-in-out';
        reviewContainer.style.transform = `translateX(-${indexRef.current * 430}px)`;
      };

      useEffect(() => {
        const interval = setInterval(() => {
          indexRef.current += 1;
          if (indexRef.current >= 4) {
            reviewContainerRef.current.style.transition = 'none';
            reviewContainerRef.current.style.transform = 'translateX(0)';
            indexRef.current = 0;
            setTimeout(() => {
              reviewContainerRef.current.style.transition = 'transform 1s ease-in-out';
              reviewContainerRef.current.style.transform = `translateX(-450px)`;
            }, 50);
          } else {
            reviewContainerRef.current.style.transform = `translateX(-${indexRef.current * 450}px)`;
          }
        }, 3000);

        return () => clearInterval(interval);
      }, []);

    return (
        <div className='Testimonials-container' id='Testimonials'>
            <div className="left-side">
                <h3>TESTIMONIALS</h3>
                <h1>Love from Happy Clients</h1>
                <p>Amet dui scelerisque habitant eget tincidunt facilisis pretium lorem ipsum dilore.</p>
                <div className="testi-btns">
                    <button id="left" onClick={() => scrollReviews('left')} >
                        <FontAwesomeIcon className='left-right-btns' icon={faArrowLeftLong} />
                    </button>
                    <button id="right" onClick={() => scrollReviews('right')}>
                        <FontAwesomeIcon className='left-right-btns' icon={faArrowRightLong} />
                    </button>
                </div>
            </div>
            <div className="right-side">
                <div className="review-boxes-container" ref={reviewContainerRef}>
                    <div className="review-boxes R-box-1">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientOne} />
                                <div className="name-post">
                                    <h2>Julien Anthor</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-2">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientTwo} />
                                <div className="name-post">
                                    <h2>Rolier Demonil</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-3">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientThree} />
                                <div className="name-post">
                                    <h2>Mr. Johnny</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-4">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientFour} />
                                <div className="name-post">
                                    <h2>Henry Davidson</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-5">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientOne} />
                                <div className="name-post">
                                    <h2>Julien Anthor</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-6">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientTwo} />
                                <div className="name-post">
                                    <h2>Rolier Demonil</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-7">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientThree} />
                                <div className="name-post">
                                    <h2>Mr. Johnny</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>
                    <div className="review-boxes R-box-8">
                        <div className="review-boxes-items">

                            <div className='review-box-header'>
                                <img src={clientFour} />
                                <div className="name-post">
                                    <h2>Henry Davidson</h2>
                                    <p>Manager</p>
                                </div>
                            </div>

                            <div className="stars-box">
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                                <FontAwesomeIcon className='stars' icon={faStar} />
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, veniam amet ipsa odit, et itaque quod minus quidem, numquam deserunt quibusdam veritatis quos voluptatibus consequuntur quisquam modi harum iure beatae quaerat quas repellendus adipisci aliquam.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
