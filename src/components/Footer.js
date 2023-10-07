import React from 'react';
import LogoFacebook from '../components/icons/logo-facebook.svg';
import LogoInsta from '../components/icons/logo-instagram.svg';
import LogoTwitter from '../components/icons/logo-twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">О нас</a>
        <a href="/contacts">Контакты</a>
        <a href="/terms">Условия использования</a>
      </div>
      <div className="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={LogoFacebook} alt="Facebook" />
            <span>Facebook</span>
          </div>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={LogoTwitter} alt="Twitter" />
            <span>Twitter</span>
          </div>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <div className="social-icon">
            <img src={LogoInsta} alt="Instagram" />
            <span>Instagram</span>
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

