import React from 'react';

import Header from '../components/general/Header';
import SocialMedia from '../components/general/SocialMedia';
import "../assets/styles/Layout.scss"

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    <SocialMedia />
    {children}
  </div>
);
export default Layout;
