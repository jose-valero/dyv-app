import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { HelmetProvider } from 'react-helmet-async';
import '../styles/App.scss';

const Home = lazy(() => import('ui/pages/Home'));
const About = lazy(() => import('ui/pages/About'));
const Layout = lazy(() => import('container/Layout'));
const Allies = lazy(() => import('ui/pages/Allies'));
const Contact = lazy(() => import('ui/pages/Contact'));
const NotFound = lazy(() => import('ui/pages/NotFound'));
const Services = lazy(() => import('ui/pages/Services'));
const Portafolio = lazy(() => import('ui/pages/Portafolio'));
const PortafolioDetails = lazy(() => import('ui/pages/Portafolio/PortafolioDetails'));

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Suspense fallback={<Spinner animation='grow' />}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/allies' component={Allies} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/portafolio' component={Portafolio} />
              <Route exact path='/services' component={Services} />
              <Route path='/portafolio/:id' component={PortafolioDetails} />
              <Route path='/nf' component={NotFound} />
            </Switch>
          </Layout>
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
