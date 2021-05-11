import React from 'react';
import './About.css';

function About() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h1>About</h1>
        <div className='image-container'>
          <img src='images/headshot.jpg' />
          <p>Front End Developer with strong design and communication skills. I combine pragmatism and craftsmanship to help my teams create winning software. My work philosophy is kaizen, also known as continuous improvement, without neglecting performance optimization, clean code, and excellent user experience. Always love taking on new challenges and cross-team collaborating.</p>
          <p>When I'm not coding, you can find me exercising at the gym, enjoying a nice bike ride, singing karaoke, or reading a book at the local cafe.</p>
          <p>Please feel free to browse my portfolio!</p>
        </div>
      </section>
    </div>
  );
}

export default About;
