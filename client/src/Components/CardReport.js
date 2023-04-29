import React from 'react';
import ProgressBar from './ProgressBar';
import '../Style/CardReport.scss';

const CardReport = ({ title, rate, leg1, leg2, desc, img }) => {
  return (
    <div className='card-report'>
      <h4>{title}</h4>
      <div className='icon-rate'>
        <img src={img} alt='' />
        <ProgressBar rate={rate} leg1={leg1} leg2={leg2} />
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default CardReport;
