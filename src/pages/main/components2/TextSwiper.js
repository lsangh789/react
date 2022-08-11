import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const TextSwiper = (props) => {

  const {ClipSwiper} = props;

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return (
    <>
      <Swiper
        {...swiperParams}
      > 
        {ClipSwiper.map((data, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="listColumn" >
                <div className="photo">
                  <img src={data.img} />
                </div>
                <div className="title">{data.title}</div>
                <div className="nick">{data.nick}</div>
              </div>
            </SwiperSlide>
          )

        })
        }
      </Swiper>
    </>
  )

}

export default TextSwiper;