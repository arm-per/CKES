import React from 'react';
import 'Styles/mainfooter.scss';
import {Link} from 'react-router-dom';
import logo from 'Assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="container footer__grid">
        <div className="footer__social">
          <h3>Social media</h3>
          <div className="footer__social-grid">
            <div className="footer__social-icon">
              <a href="/"><img src={''} alt=""/></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={''} alt=""/></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={''} alt=""/></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={''} alt=""/></a>
            </div>
          </div>
        </div>
        <div className="footer__sitemap">
          <h3>Sitemap</h3>
          <div className="footer__sitemap-list">
            <Link to={'/'}>Home</Link>
            <Link to={'/kitchen'}>Kitchens</Link>
            <Link to={'/air-conditioner'}>Air Conditioner</Link>
            <Link to={'/refrigeration'}>Refrigeration</Link>
            <Link to={'/electrical'}>Electrical</Link>
            <Link to={'/contact'}>Contact</Link>
          </div>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="CKES logo"/>
          <p>
            {
              new Date().getFullYear()
            } | All rights reserved.
          </p>
        </div>
      </div>
      <div className="container footer__signature">
                Design and develop by <a href="https://www.dos17.digital"><b>DOS17 Digital</b></a>
      </div>
    </footer>
  );
};

export default Footer;
