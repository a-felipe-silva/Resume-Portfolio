import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CustomCursor from './components/CustomCursor';
import { isMobile } from 'react-device-detect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {isMobile ? (
      <CustomCursor />
    ) : null}
  </React.StrictMode>
);