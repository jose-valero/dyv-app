import React from 'react';
import Logo from '../components/general/Logo';
import Header from '../components/general/Header';
import SocialMedia from '../components/general/SocialMedia';
import Search from '../components/general/Search';
import '../assets/styles/Layout.scss';
import '../assets/styles/Logo.scss';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    <Search />
    <SocialMedia />
    <Logo />
    {children}
  </div>
);
export default Layout;
