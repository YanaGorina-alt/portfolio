import './testimonials.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css/autoplay"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import testimonials from './data'
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2> What Others Say About Me</h2>
      <p>These unbiased testimonials showcase the perspectives of individuals who have had the opportunity to interact with me.</p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601:{slidesPerView:2},
          1025:{slidesPerView:3}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial  testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>

      </div>
    </section>
  )
}

export default Testimonials