import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../css/chartSwiper.css';

const ChartSwiper = (props) => {

  const {chartSwiper} = props;

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return(

    <Swiper {...swiperParams}>

      {chartSwiper.map((data, index)=>{
        return(
          <SwiperSlide key={index}>
            <div className="listRows">
              <div className="photo">
                <img src={data.img} />
              </div>
              <div className="rankWrap">
                <div className="rank">{data.rank}</div>
              </div>
              <div className="infoWrap">
                <div className="userNick">
                  {data.usrNick}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })
      }

      <SwiperSlide>
        <div className="nextRanking">
          <p>그 다음은 누구일까?</p>
          <span></span>
        </div>
      </SwiperSlide>

    </Swiper>

  );

};

export default ChartSwiper;