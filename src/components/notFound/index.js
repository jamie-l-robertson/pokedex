import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

const NotFound = () => (
  <Wrapper>
    <h1>404 page not found</h1>
    <img src="/images/404.jpg" alt="Pikachu is very sorry!" className="error-img" />
    <p>We are sorry but the page you are looking for does not exist.</p>
    <Link to="/">Return to home</Link>
  </Wrapper>
);

export default NotFound;
