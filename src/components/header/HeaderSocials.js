/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  BsLinkedin, BsGithub, BsMedium, BsDribbble,
} from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
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
    <a href="https://github.com/BertrandConxy" target="_blank" rel="noreferrer">
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
);

export default HeaderSocials;
