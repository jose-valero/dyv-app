import React, { lazy } from 'react';
import './Layout.scss';
const Header = lazy(() => import('../ui/Layout/Header'));
const SocialMedia = lazy(() => import('../ui/Layout/SocialMedia'));
const Footer = lazy(() => import('../ui/Layout/Footer'));
const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    <SocialMedia />
    {children}
    <Footer />
  </div>
);
export default Layout;
