import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './Styles/Dashboard.css'; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
