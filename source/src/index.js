import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import {hydrate} from "react-dom";


const rootContainer = document.getElementById('root');
hydrate(
  <CookiesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CookiesProvider>,
 rootContainer
);

