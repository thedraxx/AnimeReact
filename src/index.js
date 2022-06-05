import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Rutas } from './routers/Rutas';

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <>
    <Rutas />
  </>,
);
reportWebVitals();
