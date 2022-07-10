import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../../assets/conxy.png';
import client2 from '../../assets/joel.PNG';
import './testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: client1,
    name: 'Bertrand Mutangana Ishimwe',
    review:
      'Having been together with Samuel for more than five years, I have learned and been inspired by him. He is a determined person who puts focus on his responsibilities till they are fulfilled. We have worked together on various projects. One of them was them was the library management system that we had to deliver in a period of a week and a half. We worked under pressure but Samuel always took the responsibility to plan how we will work to meet the project requirements and the deadline, he divided tasks among us and did not hesitate to work extra time so that we meet the deadline. This is one of the things that I have learned from him.',
  },

  {
    id: 2,
    avatar: client2,
    name: 'Billions joel',
    review:
      'Mugisha is a very inquisitive person with an urge to learn. He is committed and loves working.',
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Reviews from clients and fellow developers</h5>
    <h2>Testimonials</h2>
    <Swiper
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {testimonials.map((reviewer) => (
        <SwiperSlide className="testimonial" key={reviewer.id}>
          <div className="client__avatar">
            <img src={reviewer.avatar} alt="client profile" />
          </div>
          <h5 className="client__name">{reviewer.name}</h5>
          <small className="client__review">{reviewer.review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
