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
              to={{pathname: 'http://www.cr-edge.com'}}
            />
            <CardItem
              src='images/turn_up_the_vamp.jpg'
              text='Turn Up The Vamp'
              label='Video Game'
              to={{pathname: 'http://turn-up-the-vamp.herokuapp.com'}}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saks_fifth_avenue.jpg'
              text='Saks Fifth Avenue'
              label='Brickwork Software'
              to={{pathname: 'https://saksfifthavenue.brickworksoftware.com'}}
            />
            <CardItem
              src='images/kate_spade.jpg'
              text='Kate Spade'
              label='Brickwork Software'
              to={{pathname: 'https://katespade.brickworksoftware.com'}}
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/david_yurman.jpg'
              text='David Yurman'
              label='Brickwork Software'
              to={{pathname: 'https://davidyurman.brickworksoftware.com'}}
            />
          <CardItem
              src='images/chicos.jpg'
              text='Chicos'
              label='Brickwork Software'
              to={{pathname: 'https://chicos.brickworksoftware.com'}}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
