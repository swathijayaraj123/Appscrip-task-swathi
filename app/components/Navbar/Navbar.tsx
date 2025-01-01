import React from 'react';
import './Navbar.css';
import Image from 'next/image'; // Ensure you import Image from Next.js

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo centered */}
      <div className="navbar-logo">
        <h1>LOGO</h1>
      </div>

      {/* Icons on the left side */}
      <div className="navbar-icons">
        <Image
          src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
          alt="Search icon"
          width={30}
          height={30}
        />
        <Image
          src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
          alt="Heart liked items"
          width={30}
          height={30}
        />
        <Image
          src="https://img.icons8.com/?size=100&id=21823&format=png&color=000000"
          alt="Shopping bag"
          width={30}
          height={30}
        />
      </div>

      <div className="navbar-language">
        <select defaultValue="English">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
