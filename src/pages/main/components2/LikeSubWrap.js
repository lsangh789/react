import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CntTitle from "./CntTitle";

import 'swiper/css';
import '../css/likeSubWrap.css';

const LikeSubWrap = () => {

  const cntTitle = [
    {
      title: '좋아하는 주제를 골라볼까요?',
      button: '더보기'
    }
  ]

  const likeSubWrap = [
    {
      id:1,
      icon: "🎵",
      p: "전체",
    },
    {
      id:2,
      icon: "🎤",
      p: "커버노래"
    },
    {
      id:3,
      icon: "🎼",
      p: "작사/작곡"
    },
    {
      id:4,
      icon: "📺",
      p: "더빙"
    },
    {
      id:5,
      icon: "😄",
      p: "수다/대화"
    },
    {
      id:6,
      icon: "🤧",
      p: "고민/사연"
    },
    {
      id:7,
      icon: "🌱",
      p: "힐링"
    },
    {
      id:8,
      icon: "💃",
      p: "성우"
    },
    {
      id:9,
      icon: "🎧",
      p: "ASMR"
    },

  ]

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return (

    <div className="likeSubWrap">
      
      <CntTitle ClipHeader={cntTitle} />
      <Swiper
        {...swiperParams}
      >
        
          {likeSubWrap.map((data, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className="likeSub">
                  <span>{data.icon}</span>
                  <p>{data.p}</p>
                </div>
              </SwiperSlide>
            )
          })
          }
          
        

      </Swiper>


    </div>

  );

};

export default LikeSubWrap;