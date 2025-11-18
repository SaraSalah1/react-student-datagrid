import React from 'react';                  // <-- هذا يحل معظم مشاكل JSX
import { StrictMode } from 'react';         // اختياري
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
