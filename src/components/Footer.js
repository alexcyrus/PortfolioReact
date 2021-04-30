import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Info
        </p>
        <div class='social-icons'>
            <Link
              class='social-icon-link email'
              to='/'
              target='_blank'
              aria-label='Email'
            >
              <i class="fas fa-envelope"></i>
            </Link>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github'></i>
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
      </section>
    </div>
  );
}

export default Footer;
