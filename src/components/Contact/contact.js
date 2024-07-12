import React, { useRef } from 'react';
import './contact.css';
import cv from '../../assets/cv.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/gitH.png';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3nvu9xu', 'template_7dshuec', form.current, 'iMLq_HclTzihftTVW')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent Successfully')
          
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email Failed')
        }
      );
  };

  return (
    <section id="contact">
      <div className='contactTitle'>Contact Me</div>
      <span className='contactDesc'>Please complete the form below to schedule a call and discuss potential work opportunities in more detail.</span>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name' name='your_name' />
        <input type="email" className='email' placeholder='Your Email' name='your_email' />
        <textarea name='message' rows="5" className='message' placeholder='Your Message/Comments' />
        <button type='submit' value='send' className='submitBtn'>Submit</button>
        <div className='links'>
          {/* <img src={cv} alt="Resume" className="img" onClick={() =>{ window.location.href = 'https://your-cv-link.com'}} /> */}
          <img src={linkedin} alt="Linkedin" className="img" onClick={() =>{ window.location.href = 'https://www.linkedin.com/in/harshitaa-anand-7890361b3/'}}/>
          <img src={github} alt="Github" className="img" onClick={() =>{ window.location.href = 'https://github.com/harshitaaAnand-pfw/'}}/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
