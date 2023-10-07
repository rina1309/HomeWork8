import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Главная</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">О нас</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Контакты</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
