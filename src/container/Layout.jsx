import React from 'react';
import { SocialMedia, Header, Footer } from '../ui/Layout';
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
