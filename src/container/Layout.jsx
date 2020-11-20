import React from 'react';

import '../assets/styles/Layout.scss';
import '../assets/styles/Logo.scss';
import Header from '../components/general/Header';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    {children}
  </div>
);
export default Layout;
