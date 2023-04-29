import React from 'react';
import '../Style/ProgressBar.scss';

const ProgressBar = ({ rate, leg1, leg2 }) => {
  return (
    <div className='progress-bar'>
      <div className='bar'>
        <div className='filler' style={{ width: `${rate}%` }}></div>
      </div>
      <div className='legend'>
        <span>{leg1}</span>
        <span>{leg2}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
