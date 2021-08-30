import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';

const NotFoundPage = () => (
  <div>
  <Header/>
    404 - <Link to="/">Πήγαινε στην αρχική</Link>
  </div>
);

export default NotFoundPage;
