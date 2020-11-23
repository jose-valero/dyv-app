import React from 'react';
import SocialMedia from '../components/general/SocialMedia';
import '../assets/styles/Layout.scss';
import '../assets/styles/Logo.scss';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    <SocialMedia />
    {children}
    <Footer />
  </div>
);
export default Layout;
