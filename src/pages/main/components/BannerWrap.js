import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../css/bannerWrap.css';

const BannerWrap = (props) => {

  const {bannerWrapList} = props;

  const swiperParams = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination:{
      type: "fraction",
    },

  }

  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <section className="bannerWrap">
      <div id="banner">

        <Swiper
            {...swiperParams}
        >

          {bannerWrapList.map((item, idx)=>{

            return (
              <SwiperSlide key={idx}>
                <div className="bannerSilde">
                  <img src={item.img} />
                </div>
              </SwiperSlide>
            );

          })
          }
          
        </Swiper>

      </div>
    </section>

  );

};

export default BannerWrap;