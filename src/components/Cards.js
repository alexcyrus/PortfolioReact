import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Work Samples</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cr-edge.png'
              text='CR-Edge'
              label='Freelance'
              path='/services'
            />
            <CardItem
              src='images/turn_up_the_vamp.jpg'
              text='Turn Up The Vamp'
              label='Video Game'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saks_fifth_avenue.jpg'
              text='Saks Fifth Avenue'
              label='Brickwork Software'
              path='/services'
            />
            <CardItem
              src='images/kate_spade.jpg'
              text='Kate Spade'
              label='Brickwork Software'
              path='/products'
            />
            <CardItem
              src='images/carolina_herrera.jpg'
              text='Carolina Herrera'
              label='Brickwork Software'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
