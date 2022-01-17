import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';


const Layout = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.any,
};

