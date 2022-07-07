import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

function Nav() {
  const [activeNav, setActiveNav] = useState('');
  const setActive = (path) => {
    setActiveNav(path);
  };

  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''} path="/">
        <button type="button" onClick={() => setActive('#home')}>
          <AiOutlineHome />
        </button>
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}>
        <button type="button" onClick={() => setActive('#about')}>
          <AiOutlineUser />
        </button>
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <button type="button" onClick={() => setActive('#experience')}>
          <BiBookBookmark />
        </button>
      </a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''}>
        <button type="button" onClick={() => setActive('#services')}>
          <RiServiceLine />
        </button>
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}>
        <button type="button" onClick={() => setActive('#contact')}>
          <BiMessageSquareDetail />
        </button>
      </a>
    </nav>
  );
}

export default Nav;
