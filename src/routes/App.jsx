import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../ui/pages/Home';
import About from '../ui/pages/About';
import Allies from '../ui/pages/Allies';
import Contact from '../ui/pages/Contact';
import Portafolio from '../ui/pages/Portafolio';
import Services from '../ui/pages/Services';
import NotFound from '../ui/pages/NotFound/NotFound';
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
          <Route path='/nf' component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
