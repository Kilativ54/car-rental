import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize/modern-normalize.css';
// import { PersistGate } from 'redux-persist/integration/react';
// import {persistor,store } from './redux/store'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/car-rental">
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
