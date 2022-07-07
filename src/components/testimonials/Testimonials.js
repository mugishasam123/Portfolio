import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import client1 from '../../assets/Juubix.png';
import client2 from '../../assets/Benjamin.png';
import client3 from '../../assets/Selma.png';
import client4 from '../../assets/Daniel.png';
import client5 from '../../assets/Samuel.png';
import './testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    avatar: client1,
    name: 'Juubix ltd',
    review:
      'Bertrand is a team player, he is creative and comes up with new ideas. He works weel with fron tend and has developed an animation piece. He is extremely tenacious always trying to dohis part within team. His sheer positivity makes him likable and easy to work with. He is experienced in remote work and content creation. He is a deadline driven person. A company culture is the most desirable for him.',
  },

  {
    id: 2,
    avatar: client2,
    name: 'Benjamin Semah',
    review:
      'I had the pleasure of working with Bertrand on the same team on multiple occasions. He is an excellent developer. He is quick to learn and pick up new skills. Another thing I also admire about him is how punctual he always was to our meetings. I am convinced he will do well in any organization he finds himself a part of.',
  },

  {
    id: 3,
    avatar: client3,
    name: 'Selma Delhadj',
    review:
      'Bertrand is such a delightful person to have around. He is a great software developer and very hard working . He is innovative, organised as well as helpful and is always open to ideas and suggestions. I recommend Bertrand as an experienced software developer that will add value to any organisation.',
  },

  {
    id: 4,
    avatar: client4,
    name: 'Daniel Yerimah',
    review:
      'Bertrand is a very smart and exciting person to work with. Highly efficient and quick to master new technologies. His ability to carefully articulate a problem, profer solutions and effectively communicate logically is remarkable.',
  },

  {
    id: 5,
    avatar: client5,
    name: 'Samuel Mugisha',
    review:
      'Being with Bertrand I learned different things from him which now are still helping me like being humble, courageous, and hard work. moreover, He does things in a simple way like implementing complex ideas into simple algorithms.',
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
