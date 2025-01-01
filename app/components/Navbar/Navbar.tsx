// components/Navbar.tsx
import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">

      {/* Logo centered */}
      <div className="navbar-logo">
        <h1>LOGO</h1>
      </div>

      {/* Language Selector */}
            {/* Icons on the left side */}
            <div className="navbar-icons">
        <img
          src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
          alt="Icon 1"
          width="40"
          height="40"
        />
        <img
          src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
          alt="Icon 2"
          width="40"
          height="40"
        />
        <img
          src="https://img.icons8.com/?size=100&id=21823&format=png&color=000000"
          alt="Icon 3"
          width="40"
          height="40"
        />
      </div>

      <div className="navbar-language">
        <select>
          <option value="English" selected>
            English
          </option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
