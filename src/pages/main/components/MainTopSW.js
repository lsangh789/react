import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import '../css/mainTopSW.css' ;

export default () => {
  SwiperCore.use([Autoplay]);

  const swiperParams = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  }

  const mainTopList = [
    {
      id: 1,
      img: 'https://photo.dalbitlive.com/profile_0/21447082800/20220413090734803799.png',
      title: '술 덜 깼어..............',
      nick: '무진ෆ⸒⸒_🕊'
    },
    {
      id: 2,
      img: 'https://photo.dalbitlive.com/profile_0/21389799600/20220221004733851466.png',
      title: '25))안녕',
      nick: '그림자단 시아꽃 [舞影]'
    },
    {
      id: 3,
      img: 'https://photo.dalbitlive.com/profile_0/21469546800/20220503032218370217.png',
      title: '일하면서 듣기 좋은 방송 💙',
      nick: '청 이 💙₊'
    }
  ]

  return (
    <section className='mainSwiper' id="mainSwiper">
      <Swiper {...swiperParams}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {mainTopList.map((item, idx)=>{
          return (
            <SwiperSlide key={idx}>
              <div className='listColumn' >
                <div className='photo'>
                  <img src={item.img} />
                </div>
                <div className='info'>
                  <div className='animation'>
                    <div className='badgeGroup'></div>
                    <span className='title'>{item.title}</span>
                    <span className='nick'>{item.nick}</span>
                    {/* {data && data.userId && <span className='nick'>{item.nick}</span>} */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })
        }

      </Swiper>
    </section>
  );
};