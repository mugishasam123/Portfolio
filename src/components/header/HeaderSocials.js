/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  BsLinkedin, BsGithub, BsMedium, BsTwitter,
} from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
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
);

export default HeaderSocials;
