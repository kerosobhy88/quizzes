import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // تم الاستيراد

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* ← لازم نلف App به */}
      <App />
    </HashRouter>
  </StrictMode>
);
