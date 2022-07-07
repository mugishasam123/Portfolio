import React from 'react';
import './header.css';
import CTA from './CTA';
import myPhoto from '../../assets/profile1-removebg-preview.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I&lsquo;m</h5>
      <h1>Bertrand Mutangana</h1>
      <h5 className="text-light">Full-stack Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={myPhoto} alt="my pic" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);

export default Header;
