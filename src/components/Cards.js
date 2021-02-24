import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="projects">
      <h1><br/>Check out these Projects!</h1>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/portfolio.png'
              text='(Portfolio website) created using html css react (react hooks/reactrouter)'
              label='Portfolio Website'
              path='/services'
            />
            <CardItem
              src='images/backend.png'
              href='https://nc-newsapi.herokuapp.com/api/articles'
              text='(Rest API) created using express, axios, supertest and more technologies'
              github="https://github.com/warsameabdalla/Rest-Api"
              label='BackEnd Project'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/frontend.png'
              href="https://e-articles.netlify.app/"
              github="https://github.com/warsameabdalla/E-Articles"
              text='A front end social media site, that allows users to comment like and view articles they want, built on the backend api project'
              label='FrontEnd Project'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
