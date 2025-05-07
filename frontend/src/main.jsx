import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Added import
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/SistemaFinanciero"> {/* Agregado basename */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
