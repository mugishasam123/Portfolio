import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import myProfile from '../../assets/me-removebg-preview.png';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={myProfile} alt="my profile" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ years working</small>
          </article>

          <article className="about__card">
            <FaUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>40+ Completed projects</small>
          </article>
        </div>

        <p>
          Hello everyone, my name is Samuel has a goal of contributing to a big scale project that is used globally one day

          I would like to work in your company because of the good mission of the company and good working environment which will enhance my productivity.
          I have a goal of working as a senior tech lead developer in my early twenties. I previously did morgan chase's virtual experience program where I get to know how software development is done in a big industry currently.
          I am studying at Microverse, an online training school where I code 8 hours a day remotely with other developers and have learned the skills of communication and teamwork. besides that, I did many different projects featuring group and solo projects which gave me a strong foundation in javascript, react js, Ruby, and Ruby on Rails.
          I am excited about the opportunity to work remotely with a strong tech company and I am proud of the steps I am taking to achieve this. this will help me to put my skills into action and learn more about the tech industry. Would you like to discuss further with me?.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let&lsquo;s talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
