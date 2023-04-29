import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/Navbar.scss';
const Navbar = () => {
  const [expendNavbar, setExpendNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpendNavbar(false);
  }, [location]);

  return (
    <div className='navbar' id={expendNavbar ? 'on' : 'off'}>
      <div className='logo'>
        <Link to='/'>Mon P'tit Surf Trip</Link>
      </div>
      <div className='right'>
        <div className='links'>
          <Link to='/'>Acceuil</Link>
          <Link to='/autor'> Qui suis-je </Link>
          <Link to='/valise'> Dans ma valise </Link>
        </div>
      </div>
      <button
        className='burger'
        onClick={() => {
          setExpendNavbar((prev) => !prev);
        }}
      >
        <span className='bar'></span>
      </button>
    </div>
  );
};

export default Navbar;
