import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
          <h1>All about SPACE!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='imagess/space0.jpg'
                  text="The space beyond Earth's atmosphere, Outer space."
                  label='Mystery'
                  path='/services'
                />
                <CardItem
                  src='imagess/space1.jpg'
                  text="This article is about the astrophotograph."
                  label='Astrophotography'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='imagess/space3.jpg'
                  text="This article is about Earth's natural satellite."
                  label='Moon'
                  path='/services'
                />
                <CardItem
                  src='imagess/space4.jpg'
                  text='This article is about the rocket manufacturer.'
                  label='Adrenaline'
                  path='/products'
                />
                <CardItem
                  src='imagess/space5.jpg'
                  text='The International Space Station (ISS) is a modular space station in low Earth orbit. '
                  label='Aventure'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Cards
