import React from 'react';
import AnalyticsEventTracker from '../eventsTracker/AnalyticsEventTracker';
import './portfolio.css';
import ProjectImage1 from '../../assets/bookstore.PNG';
import ProjectImage2 from '../../assets/portfolio.PNG';
import ProjectImage3 from '../../assets/carRental.PNG';
import ProjectImage4 from '../../assets/showmania.PNG';
import ProjectImage5 from '../../assets/spacehub.PNG';
import ProjectImage6 from '../../assets/stocks.PNG';

const projectData = [
  {
    id: 1,
    image: ProjectImage1,
    title: 'Bookstore CMS',
    description: 'It is an app that allows you to display a list of added books, add new book and remove a book',
    github: 'https://github.com/mugishasam123/Bookstore--CMS',
    demo: 'https://sambookstore.netlify.app/',
  },

  {
    id: 2,
    image: ProjectImage2,
    title: "Portfolio",
    description: 'this is the complete version of my portfolio project I built to implement best html5 and css3 best practices',
    github: 'https://github.com/mugishasam123/Personal-portfolio',
    demo: 'https://portfolio40.netlify.app/',
  },

  {
    id: 3,
    image: ProjectImage3,
    title: 'Car Rentals',
    description: 'A car booking app where a user can rent a car. The app also presents Admin privileges where an Admin can Add and Delete cars. This is engineered using Ruby on Rails as backend and React as front end. In this repository we have the frontend. The backend can be found here',
    github: 'https://github.com/mugishasam123/Rent-a-car-FE',
    demo: 'https://rent-a-car-fe.netlify.app/',
  },

  {
    id: 4,
    image: ProjectImage4,
    title: 'Show Mania',
    description: 'ShowMania is a website for shows where you can get in find your favourite show like it and leave a comment. It is built with HTML, CSS and JavaScript with data from TvMaze API(tv show data) and the Involvement API(likes and comments).',
    github: 'https://github.com/mugishasam123/Show-Mania',
    demo: 'https://showmania42.netlify.app/',
  },

  {
    id: 5,
    image: ProjectImage5,
    title: 'Space hub',
    github: 'https://github.com/mugishasam123/Space-hub',
    description: 'SpaceHub is an app that allows you to display a list of rockets,missions and you can reserve rockets ,enter missions and cancel reservation ,leave missions using spaceX api.',
    demo: 'https://spacehub45.netlify.app/',
  },

  {
    id: 6,
    image: ProjectImage6,
    title: 'Stocks Metrics',
    github: 'https://github.com/mugishasam123/Stock-metrics',
    description: 'Stock metrics is an app that allows you to display active stocks of companies ,and you can see I ncome statement of past 5 years by selecting any company.It is built with react and redux .',
    demo: 'https://stock-metrics42.netlify.app/',
  },
];

function Portfolio() {
  const gaEventTracker = AnalyticsEventTracker('Visit Projects');
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectData.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="project thumbnail" />
            </div>
            <h3>{project.title}</h3>
            <small>{project.description}</small>
            <div className="cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Source Code')}
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Live Demo')}
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
