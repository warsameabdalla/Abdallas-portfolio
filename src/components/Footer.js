import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <h2>Contact Details</h2>
        <br/>
        <p className='footer-subscription-heading'>
          NAME: Abdalla Warsame<br/>
          Location: Bolton Greater Manchester<br/>
          Email adress: abdallazwolle@hotmail.com<br/><br/>
          Feel free to contact me!
        </p>
       </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>

            <a target="_blank" href='https://github.com/warsameabdalla'> <i class='fab fa-github' /></a>
            <a target="_blank" href='https://uk.linkedin.com/in/abdalla-warsame-3955781a5'> <i class='fab fa-linkedin' /></a>
            {/* <Link
              class='social-icon-link twitter'
              to='https://uk.linkedin.com/in/abdalla-warsame-3955781a5'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
