import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import { registerLicense } from '@syncfusion/ej2-base';

import App from './App';
import StoreProvider from './store';
registerLicense( import.meta.env.VITE_SYNCFUSION_KEY)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
   <StoreProvider>
    <App />
    </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);
