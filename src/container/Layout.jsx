import React from 'react';

import Header from '../components/general/Header';
import '../styles/Layout.scss';

const Layout = ({ children }) => (
  <div className='layout__container'>
    <Header />
    {children}
  </div>
);
export default Layout;
