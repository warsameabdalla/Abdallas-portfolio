import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { HashLink as Liink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            My Portfolio
          </Link>
          <div className="icons">
          <a target="_blank" href='https://github.com/warsameabdalla'> <i class='fab fa-github' /></a>
            <a target="_blank" href='https://uk.linkedin.com/in/abdalla-warsame-3955781a5'> <i class='fab fa-linkedin' /></a>
            </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Liink to='/#home' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Liink>
            </li>
            <li className='nav-item'>
              <Liink
                to='/#aboutme'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT ME
              </Liink>
            </li>
            <li className='nav-item'>
            <Liink to="/#projects"  className='nav-links'
                onClick={closeMobileMenu}>PROJECTS</Liink>
            </li>
            

           
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
