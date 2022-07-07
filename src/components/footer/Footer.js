import React from 'react';
import {
  BsLinkedin, BsGithub, BsMedium, BsDribbble,
} from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer>
    <a className="footer__logo" href="#home">
      BERTRAND
    </a>
    <ul className="permalinks">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/in/bertrandmutangana/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://angel.co/u/bertrand-mutangana"
        target="_blank"
        rel="noreferrer"
      >
        <FaAngellist />
      </a>
      <a
        href="https://github.com/BertrandConxy"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://medium.com/@BertrandMutangana/"
        target="_blank"
        rel="noreferrer"
      >
        <BsMedium />
      </a>
      <a href="https://dribbble.com/Conxy" target="_blank" rel="noreferrer">
        <BsDribbble />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Bertrand Mutangana portfolio. All rights reserved.</small>
      <small>Design was inspired by EGATOR designer</small>
    </div>
  </footer>
);

export default Footer;
