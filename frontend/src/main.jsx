import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';

import App from './App';
import StoreProvider from './store';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
   <StoreProvider>
    <App />
    </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);
