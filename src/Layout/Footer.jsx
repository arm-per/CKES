import React from 'react';
import 'Styles/mainfooter.scss';
import {Link} from 'react-router-dom';
import logo from 'Assets/logo.png';
import fb from 'Assets/facebook-circle-fill.svg';
import ig from 'Assets/instagram-fill.svg';
import lin from 'Assets/linkedin-fill.svg';
import msg from 'Assets/messenger-fill.svg';

const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="container footer__grid">
        <div className="footer__social">
          <h3>Social media</h3>
          <div className="footer__social-grid">
            <div className="footer__social-icon">
              <a href="/"><img src={fb} alt="facebook" width="24"/><span>Facebook</span></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={ig} alt="instagram" width="24"/><span>Instagram</span></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={msg} alt="messenger" width="24"/><span>Messenger</span></a>
            </div>
            <div className="footer__social-icon">
              <a href="/"><img src={lin} alt="linkedin" width="24"/><span>Linkedin</span></a>
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
