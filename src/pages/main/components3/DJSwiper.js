import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import ListColumn from "./ListColumn";

const DJSwiper = () => {

  const DjLsit = [
    {
      id:1,
      img:'https://photo.dalbitlive.com/profile_0/21152804400/20210725083538654099.png?292x292',
      nick:'함만대꾸아 .•⚘',
      gender: 'g'
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/profile_0/21472963200/20220506174504190278.png?292x292',
      nick:'⁴빠 기🎰       🔧',
      gender: 'm'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/profile_0/21328023600/20211228031114434942.png?292x292',
      nick:' ♯리 땀     🎈',
      gender: 'm'
    },
    {
      id:4,
      img:'https://photo.dalbitlive.com/profile_0/21349458000/20220116214059936936.png?292x292',
      nick:'⁴뮤 아 진  👨🏻‍🎨',
      gender: 'm'
    },
    {
      id:5,
      img:'https://photo.dalbitlive.com/profile_0/21015774000/20210325025429203855.png?292x292',
      nick:'⟐ ʜᴇᴀᴠᴇɴ     ᑒꜝ',
      gender: 'm'
    },
    {
      id:6,
      img:'https://image.dalbitlive.com/banner/1223/0303/55.Chunge.png?292x292',
      nick:'청 이 💙₊',
      gender: 'g'
    },
    {
      id:7,
      img:'https://photo.dalbitlive.com/profile_0/21392046000/20220223064401464118.png?292x292',
      nick:'⁴말 쑤🦄       🔧',
      gender: 'm'
    },
    {
      id:8,
      img:'https://image.dalbitlive.com/banner/hvn.png?292x292',
      nick:'⟐ ʜᴇᴀᴠᴇɴ     ᑒꜝ',
      gender: 'g'
    },
    {
      id:9,
      img:'https://photo.dalbitlive.com/profile_0/21406694400/20220308104432090395.png?292x292',
      nick:'칸소 🍤',
      gender: 'g'
    },
    {
      id:10,
      img:'https://photo.dalbitlive.com/profile_0/21230305200/20211002090318897115.png?292x292',
      nick:'효댕 🤍',
      gender: 'g'
    },
  ]

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return (

    <Swiper {...swiperParams} >

      {DjLsit.map((data, idx)=>{
        return(
          <SwiperSlide key={idx}>
            <ListColumn img={data.img} nick={data.nick} gender={data.gender}>
              <button className="fanBtn">+ 팬등록</button>
            </ListColumn>
          </SwiperSlide>
        )
      })
      }
    </Swiper>

  );
  
};

export default DJSwiper;