import React from 'react';
import '../Style/Hero.scss';
const Hero = ({ background, title }) => {
  const textSize = String(title).length;
  const pourcent = 100 - textSize * 2;
  return (
    <div
      className='hero'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className='shape'>
        <div className='background'>
          <svg viewBox='0 0 500 500'>
            <path
              d='M243.2, 382.4c-74.8,   
    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
    135.5 S318, 382.4, 243.2, 382.4z'
              id='curve'
              fill='transparent'
            />
            <text dy='-10%' x={`${pourcent}%`} fill='white'>
              <textPath href='#curve'>{title}</textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
