import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

function LayoutWrapper() {
  const location = useLocation();
  const isChatRoom = location.pathname.startsWith('/chat/');
 

  return (
    <>
      {!isChatRoom && <Header />}
      <App />
      {!isChatRoom && <Footer />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutWrapper />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
