import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Style/Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h4>Liens</h4>
          <Link to='/'>Acceuil</Link>
          <Link to='/autor'> Qui suis-je </Link>
          <Link to='/valise'> Dans ma valise </Link>
        </div>
        <div>
          <h4>A Propos</h4>
          <p>Mon blog de surf autour du monde.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <div className='icons'>
            <a
              href='https://github.com/julienguyon12'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon fontSize='large' />
            </a>
            <a
              href='https://www.linkedin.com/in/julien-guyon-9079a0189'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon fontSize='large' />
            </a>
          </div>
        </div>
      </div>
      <span className='bottom'>@ Julien Guyon - 2023</span>
    </div>
  );
};

export default Footer;
