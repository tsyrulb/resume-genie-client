
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1) Create the root:
const root = ReactDOM.createRoot(document.getElementById('root'));

// 2) Render your App component:
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 3) Optional performance measuring
reportWebVitals();
