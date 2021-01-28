import React from 'react';
import SocialMedia from '../ui/Layout/SocialMedia';
import Header from '../ui/Layout/Header';
import Footer from '../ui/Layout/Footer';
import './Layout.scss';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    <SocialMedia />
    {children}
    <Footer />
  </div>
);
export default Layout;
