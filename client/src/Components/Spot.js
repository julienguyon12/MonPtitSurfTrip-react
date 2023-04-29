import React from 'react';
import { Link } from 'react-router-dom';
import { spot } from '../data/data';
import SpotCard from './SpotCard';
import '../Style/Spot.scss';
const Spot = ({ pays }) => {
  return (
    <div className='spot'>
      <div className='spotlist'>
        {spot
          .filter((countrie) => countrie.pays === pays.title)
          .map((item, idx) => (
            <Link to={`/spots/${item.id}`} key={idx}>
              <SpotCard
                id={item.id}
                title={item.title}
                description={item.description}
                imgitem={item.imgitem}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Spot;
