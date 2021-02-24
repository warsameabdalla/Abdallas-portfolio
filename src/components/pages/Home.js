import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HomePage from '../HomePage';
import Aboutme from '../Aboutme';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <HomePage />
      <Aboutme/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
