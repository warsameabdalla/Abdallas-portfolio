import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomePage.css';
import { HashLink as Liink } from 'react-router-hash-link';
import  video from "../videos/video-1.mp4"


function HomePage() {
  return (
    <div className='home-container' id="home">
      <video src={video} autoPlay loop muted />
      <h1>HELLO, I AM ABDALLA </h1>
      <p>A Software Developer</p>
      <div className='home-btns'>

      <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        > 
          CLICK HERE TO SEE MY PROJECTS!
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
