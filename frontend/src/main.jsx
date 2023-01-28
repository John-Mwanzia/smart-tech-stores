import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import StoreProvider from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>
);
