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
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>
    </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
);
