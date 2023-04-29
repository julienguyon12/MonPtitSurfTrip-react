import React from 'react';
import '../Style/CardReport.scss';

const CardAround = ({ title, desc, img }) => {
  return (
    <div className='card-report'>
      <h4>{title}</h4>
      <div className='icon-rate'>
        <img src={img} alt='' />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default CardAround;
