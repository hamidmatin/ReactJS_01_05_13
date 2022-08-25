import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      {children}
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
