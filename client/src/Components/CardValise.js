import React from 'react';
import '../Style/CardValise.scss';
const CardValise = ({ title, list, conseil }) => {
  return (
    <div className='card-valise'>
      <div className='top'>
        <div className='left'>
          <h2>{title}</h2>
          <ul>
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='center'></div>
        <div className='right'>
          <h3>Mon conseil</h3>
          <p>{conseil}</p>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  );
};

export default CardValise;
