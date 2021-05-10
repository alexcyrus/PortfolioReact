import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ALEX CYRUS</h1>
      <h3>WEB DEVELOPER</h3>
      <div class='social-icons'>
        <Link
          class='social-icon-link email'
          to={{pathname: 'mailto:alex@alexcyrus.com'}}
          target='_blank'
          aria-label='Email'
        >
          <i class="fas fa-envelope"></i>
        </Link>
        <Link
          class='social-icon-link github'
          to={{pathname: 'https://github.com/alexcyrus'}}
          target='_blank'
          aria-label='Github'
        >
          <i class='fab fa-github'></i>
        </Link>
        <Link
          class='social-icon-link linkedin'
          to={{pathname: 'https://www.linkedin.com/in/alexcyrus'}}
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class='fab fa-linkedin' />
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
