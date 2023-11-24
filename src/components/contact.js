import React from 'react';
import './contact.css';
import Facebook from '../assets/fb.png';
import Telegram from '../assets/tg.png';
import Instagram from '../assets/ig.png';
import Linkedin from '../assets/ln.png';

const Contact = () => {
  return (
    <section className='contactPage'>
      <div id='contact' className='center-content'>
        <h1 className='contactPageTitle'> Contact Me </h1>
        <span className='contactDesc'>Please fill the form below</span>
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Your name here' />
          <input type='email' className='email' placeholder='Your email here' />
          <textarea className='msg' name='message' rows="5" placeholder='Your message here' />
          <button type='submit' value='send' className='submitBtn'>
            Submit
          </button>
          <div className='links'>
            <img src={Facebook} alt='fb' className='link' />
            <img src={Linkedin} alt='ln' className='link' />
            <img src={Instagram} alt='ig' className='link' />
            <img src={Telegram} alt='tg' className='link' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
