import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'; // css
import "bootstrap/dist/js/bootstrap.bundle.min.js";//Bootstrap JS
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    
    </BrowserRouter>
  </StrictMode>,
)
