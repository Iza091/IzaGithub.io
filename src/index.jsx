import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from './ThemeContext';
import { TraduccionProvider } from './TraduccionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TraduccionProvider>
        <App />
      </TraduccionProvider>
    </ThemeProvider>
  </React.StrictMode>
);

