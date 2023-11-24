import React from 'react';
import './home.css';
import bg from '../assets/image.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id='home'>
      <div className='introcontent'>
        <span className='hello'>Hey :)</span> <br />
        <span className='introText'>
          I'm <span className='introName'>  Rediat 😃 </span> <br />
          <br /> Interactive Attractive & Resposive website designer
        </span>
        <p className='introPara'>I'm passionate about crafting interactive and reactive web pages! If you have any comments, questions, <br /> or just want to chat, don't hesitate to reach out. I'm always open to connecting with fellow enthusiasts! 😊</p>
        <Link to='your-target' smooth={true} duration={500}>
          <button className='btn'>Hire Me</button>
        </Link>
      </div>

      <div className='imagee' >
      <img src={bg} alt='profile' className='bg' />

      </div>
    </section>
  );
};

export default Home;
