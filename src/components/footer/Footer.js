import React from 'react';
import {
  BsLinkedin, BsGithub, BsMedium, BsTwitter,
} from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer>
    <a className="footer__logo" href="#home">
      Mugisha
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
        href="https://www.linkedin.com/in/mugisha-samuel-55a905208/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://angel.co/u/mugisha-samuel"
        target="_blank"
        rel="noreferrer"
      >
        <FaAngellist />
      </a>
      <a
        href="https://github.com/mugishasam123"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://medium.com/@mugishasamuel400"
        target="_blank"
        rel="noreferrer"
      >
        <BsMedium />
      </a>
      <a href="https://twitter.com/mugishasamuel42/" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Mugisha Samuel portfolio. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
