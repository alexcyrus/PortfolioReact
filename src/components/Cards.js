import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Portfolio</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
          <CardItem
              src='images/twins_family_dentistry.png'
              text='Twins Family Dentistry'
              label='Freelance'
              to={{pathname: 'https://www.twinsfamilydentistry.com'}}
            />
            <CardItem
              src='images/cr-edge.png'
              text='CR-Edge'
              label='Freelance'
              to={{pathname: 'https://www.cr-edge.com'}}
            />
          </ul>
          <ul className='cards-items'>
          <CardItem
              src='images/charney_companies.png'
              text='Charney Companies'
              label='Freelance'
              to={{pathname: 'https://www.charneycompanies.com'}}
            />
            <CardItem
              src='images/saks_fifth_avenue.jpg'
              text='Saks Fifth Avenue'
              label='Brickwork Software'
              to={{pathname: 'https://saksfifthavenue.brickworksoftware.com'}}
            />
          </ul>
          <ul className='cards-items'>
          <CardItem
              src='images/turn_up_the_vamp.jpg'
              text='Turn Up The Vamp'
              label='Video Game'
              to={{pathname: 'https://turn-up-the-vamp.herokuapp.com'}}
            />
          <CardItem

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
