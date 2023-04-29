import { valiseDetail } from '../data/data';
import '../Style/Valise.scss';
import CardValise from '../Components/CardValise';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Gallerie from '../Components/Gallerie';

const Valise = () => {
  const [selectValise, setSelectValise] = useState(0);
  const item = valiseDetail[selectValise];
  const spring = {
    type: 'spring',
    stiffness: 60,
  };
  return (
    <div className='valise'>
      <section className='equipement'>
        <div className='wrap'>
          <div className='head'>
            <h1>Dans Ma Valise </h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/valise/valise.png`}
              alt=''
            />
          </div>
        </div>
        <ul className='list'>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(0);
              }}
            >
              Vêtements
            </button>
          </li>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(1);
              }}
            >
              Sac
            </button>
          </li>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(2);
              }}
            >
              Electronique{' '}
            </button>
          </li>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(3);
              }}
            >
              Chaussures
            </button>
          </li>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(4);
              }}
            >
              Surf Equipement
            </button>
          </li>
          <li className='item'>
            <button
              onClick={() => {
                setSelectValise(5);
              }}
            >
              Accessoires
            </button>
          </li>
        </ul>
      </section>
      <motion.div
        key={selectValise}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={spring}
      >
        <CardValise
          id={item.id}
          title={item.title}
          list={item.items}
          conseil={item.pconseil}
        />
      </motion.div>
      <Gallerie pictures={valiseDetail} />
    </div>
  );
};

export default Valise;
