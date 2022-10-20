import React from 'react';
import CV from '../../assets/mugisha samuel 2022 resume.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">
      Download CV
    </a>
    <a href="#contact" className="btn btn-primary">
      Let&lsquo;s talk
    </a>
  </div>
);

export default CTA;
