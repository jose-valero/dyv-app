import React, { lazy, Suspense } from 'react';

import './Layout.scss';
const Header = lazy(() => import('../ui/Layout/Header'));
const SocialMedia = lazy(() => import('../ui/Layout/SocialMedia'));
const Footer = lazy(() => import('../ui/Layout/Footer'));
const Spinnator = lazy(() =>
  import('../ui/components/stateless/Spinner/Spinner')
);
const Layout = ({ children }) => (
  <div className='layout__container'>
    <Suspense fallback={<Spinnator />}>
      <Header />
      <SocialMedia />
      {children}
      <Footer />
    </Suspense>
  </div>
);
export default Layout;
