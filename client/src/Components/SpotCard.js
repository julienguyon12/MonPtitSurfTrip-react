import React from 'react';
import '../Style/SpotCard.scss';
const SpotCard = ({ title, description, imgitem }) => {
  return (
    <div className='spotCard'>
      <img src={imgitem} alt='' />
      <div className='desc'>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Voir plus</span>
      </div>
    </div>
  );
};

export default SpotCard;
