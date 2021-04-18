import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import {
  About,
  Allies,
  Contact,
  Home,
  NotFound,
  Portafolio,
  Services,
  PortafolioDetails,
} from '../ui/pages';

// import '../styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
