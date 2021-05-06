import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cr-edge.png'
              text='CR-Edge'
              label='Freelance'
              path='/portfolio'
            />
            <CardItem
              src='images/turn_up_the_vamp.jpg'
              text='Turn Up The Vamp'
              label='Video Game'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saks_fifth_avenue.jpg'
              text='Saks Fifth Avenue'
              label='Brickwork Software'
              path='/portfolio'
            />
            <CardItem
              src='images/kate_spade.jpg'
              text='Kate Spade'
              label='Brickwork Software'
              path='/portfolio'
            />
            <CardItem
              src='images/carolina_herrera.jpg'
              text='Carolina Herrera'
              label='Brickwork Software'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
