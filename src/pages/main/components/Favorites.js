import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import '../css/favorites.css';

const Favorites = () => {

  const favoritesList = [

    {
      id:1,
      img:'https://photo.dalbitlive.com/profile_0/20910193200/20201221085449574450.png?292x292',
      p:'🎼스파~이더🕷 :||'
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/profile_3/profile_m_200327.jpg?292x292',
      p:'밝은창'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/profile_0/21463977600/20220428172459692460.png?292x292',
      p:'귀하게자람'
    },
    {
      id:4,
      img:'https://photo.dalbitlive.com/profile_0/21453868800/20220419141202291235.png?292x292',
      p:'샤 샤'
    },
    {
      id:5,
      img:'https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg?292x292',
      p:'싫어'
    },
    {
      id:6,
      img:'https://photo.dalbitlive.com/profile_0/20678907600/20200529220754409173.jpeg?292x292',
      p:'누구냐넌ㅎ'
    },
    {
      id:7,
      img:'https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg?292x292',
      p:'qdk2nme2'
    }

  ]

  const swiperParams = {
    spaceBetween: 9,
    slidesPerView: 5.5,
  }

  return (

    <section className="favorites">
      <Swiper
        {...swiperParams}
      >
      {favoritesList.map((item, idx)=>{
        return (
          <SwiperSlide key={idx}>
            <div className="listColumn">
              <div className="photo">
                <img src={item.img} />
              </div>
              <p>{item.p}</p>
            </div>
          </SwiperSlide>

        );

      })
      }

      </Swiper>

    </section>

  );

};

export default Favorites;
