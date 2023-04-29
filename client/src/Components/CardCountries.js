import React, { useState } from 'react';
import '../Style/CardCountries.scss';
import SailingIcon from '@mui/icons-material/Sailing';
import { listePays } from '../data/data';
import { motion } from 'framer-motion';
import Spot from './Spot';
const CardCountries = () => {
  const [select, setSelect] = useState(0);
  const pays = listePays[select];
  return (
    <div className='card-countries'>
      <div className='title'>
        <h2>Choisissez un pays</h2>
      </div>
      <div className='wrapper-card'>
        <div className='left'>
          <ul>
            <li className={select === 0 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(0);
                }}
              >
                Nicaragua
              </button>
              <div className='bar'></div>
            </li>
            <li className={select === 1 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(1);
                }}
              >
                Panama
              </button>
              <div className='bar'></div>
            </li>
            <li className={select === 2 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(2);
                }}
              >
                Costa Rica
              </button>
              <div className='bar'></div>
            </li>
            <li className={select === 3 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(3);
                }}
              >
                Equateur
              </button>
              <div className='bar'></div>
            </li>
            <li className={select === 4 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(4);
                }}
              >
                Pérou
              </button>
              <div className='bar'></div>
            </li>
            <li className={select === 5 ? 'blue' : 'black'}>
              <SailingIcon className='icon' />
              <button
                onClick={() => {
                  setSelect(5);
                }}
              >
                Indonésie
              </button>
              <div className='bar'></div>
            </li>
          </ul>
        </div>
        <div className='midle'></div>
        <div className='right'>
          <div className={select === 0 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/nicaragua/cartespotnicaragua.png`}
                alt=''
              />
            </div>
          </div>
          <div className={select === 1 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/panama/cartespotpanama.png`}
                alt=''
              />
            </div>
          </div>
          <div className={select === 2 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/costarica/cartespotcosta.png`}
                alt=''
              />
            </div>
          </div>
          <div className={select === 3 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/equateur/cartespotequateur.png`}
                alt=''
              />
            </div>
          </div>
          <div className={select === 4 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/perou/cartespotperou.png`}
                alt=''
              />
            </div>
          </div>
          <div className={select === 5 ? 'show' : 'hide'}>
            <div className='card'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/cartes/indo/cartespotindo.png`}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        key={select}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
      >
        <Spot pays={pays} />
      </motion.div>
    </div>
  );
};

export default CardCountries;
