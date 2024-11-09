import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {

    useGSAP(()=>{
        gsap.from(".contact-container h3", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".contact-container h3"
          }
        })
        gsap.from(".contact-container h1", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".contact-container h1"
          }
        })
        gsap.from(".name-email", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".name-email"
          }
        })
        gsap.from(".phone-subject", {
          y: 100,
          delay: 1.4,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".phone-subject"
          }
        })
        gsap.from(".message", {
          y: 100,
          delay: 1.7,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".message"
          }
        })
        gsap.from("form button", {
          y: 100,
          delay: 2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".form button"
          }
        })
        
        
        
      })


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid, it should be 10 digits';
    }
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Here you would usually send the form data to a server
      console.log('Form submitted', formData);

      // Show success message
      setTimeout(()=>{
          setSuccessMessage('Message sent successfully!');
        }, 3000)
      setTimeout(()=>{
          setSuccessMessage('');
        }, 6000)
        
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(formErrors);
      setSuccessMessage(''); // Clear success message if there are errors
    }
  };

  return (
    <div className="contact-container" id='contact'>
        <h3>CONTACT US</h3>
        <h1>Contact Details</h1>
    <form onSubmit={handleSubmit} className="contact-form">
      <div className='name-email'>


        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error">{errors.name}</span>}
      
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>


      <div className='phone-subject'>
        <label htmlFor="phone"></label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder='Phone Number'
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      
        <label htmlFor="subject"></label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder='Subject'
          value={formData.subject}
          onChange={handleChange}
          required
        />
        {errors.subject && <span className="error">{errors.subject}</span>}
      </div>




      <div className='message'>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          placeholder='Enter Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      <button type="submit">Send Message</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
    </div>
  );
};

export default ContactForm;
