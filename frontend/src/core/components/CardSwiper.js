import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

import '../static/css/card_swiper.css';
import CardBlog from './CardBlog';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const CardSwiper = ({ blogs }) => {


  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="container-fluid">
      <div style={{ "height": "150px", "overflow": "hidden", "zIndex": "1", "position": "absolute", "width": "100%" }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ "height": "100%", "width": "100%" }}>
          <path d="M-3.15,67.40 C256.43,109.83 254.74,-49.04 500.22,74.30 L500.00,150.00 L0.00,150.00 Z" style={{ "stroke": "none", "fill": "#edecec" }}>
          </path>
          <path d="M-3.15,67.40 C254.17,-37.20 256.43,101.94 500.22,74.30 L500.00,150.00 L0.00,150.00 Z" style={{ "stroke": "none", "fill": "#e5e4e4" }}>
          </path>
          <path d="M-2.03,97.99 C8.12,9.19 323.59,235.16 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style={{ "stroke": "none", "fill": "#f8f8f8" }}>
          </path>
        </svg>
      </div>
      <div className="row" style={{ "zIndex": "5", "position": "relative" }}>
        <div className="col-10 mx-auto">
          <h2 className="m-4 main-title">Podría Interesarte</h2>
        </div>
      </div>



      <div className="row" style={{"backgroundColor":"#f9f9f9"}}>
        <div className="col-10 mx-auto my-3">

          <Swiper
            className="px-5"
            id="thumbs"
            spaceBetween={0}
            slidesPerView={4}

            controller={{ control: controlledSwiper }}
            onSwiper={setControlledSwiper}
            tag="section"
            wrapperTag="ul"
            navigation
            pagination
          >
            {blogs.map(blog => (
              <SwiperSlide
                key={blog._id}
                tag="li"
                style={{ listStyle: 'none' }}
              >
                <CardBlog
                  name={blog.name}
                  id={blog._id}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

    </div>
  );
}

export default CardSwiper;