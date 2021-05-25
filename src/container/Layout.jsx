import React, { lazy, Suspense } from 'react';

import './Layout.scss';
import Spinnator from '../ui/components/stateless/Spinner/Spinner';
const Header = lazy(() => import('../ui/Layout/Header'));
const Hero = lazy(() => import('../ui/components/stateless/Hero/Hero'));
const SocialMedia = lazy(() => import('../ui/Layout/SocialMedia'));
const Footer = lazy(() => import('../ui/Layout/Footer'));
const Layout = ({ children, loaction }) => (
  <div className='layout__container'>
    <Suspense fallback={<Spinnator />}>
      <Header />
      <Hero displayOnPage="about" />
      <SocialMedia />
      {children}
      <Footer />
    </Suspense>
  </div>
);
export default Layout;
