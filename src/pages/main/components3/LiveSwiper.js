import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../css/liveSwiper.css';

const LiveSwiper = (props) => {

  const {LiveSwipers} = props;

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return(

    <Swiper {...swiperParams}>

      {LiveSwipers.map((data, idx)=>{

        return(
          <SwiperSlide key={idx}>
            <div className="listColumn">
              <div className="photo">
                <img src={data.img} />
              </div>
              <p className="nick">{data.p}</p>
            </div>
          </SwiperSlide>
        )

      })
      }

    </Swiper>

  );

};

export default LiveSwiper;