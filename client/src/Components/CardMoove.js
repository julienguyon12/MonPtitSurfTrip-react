import React from 'react';
import '../Style/CardMoove.scss';
const CardMoove = ({ title, img, desc }) => {
  return (
    <div className='card-moove'>
      <img src={img} alt='' />
      <div className='title'>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default CardMoove;
