import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import store from './redux/store';
import './styles/App.scss';
// import "@bootstrap/bootstrap-reboot.min.css"


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
