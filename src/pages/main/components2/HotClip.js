import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import CntTitle from "./CntTitle";

import 'swiper/css';
import '../css/hotClip.css';

const HotClip = () => {

  const HotClipTitle = [
    {
      title: '🌟 지금, 핫한 클립을 한눈에!',
      button: '더보기'
    }
  ]

  const HotClipList = [
    {
      id: 1,
      img: 'https://photo.dalbitlive.com/clip_0/21279726000/20211115000052719608.png?292x292',
      type: '커버/노래',
      title: '아름다워 - 창모',
      nickName: 'ᴵᴺᵀ 이 그 잼'
    },
    {
      id: 2,
      img: 'https://photo.dalbitlive.com/clip_0/21476286000/20220509055028681099.jpeg?292x292',
      type: '성우',
      title: '드라마-연애말고 결혼_예의바르게 이별',
      nickName: '댕 루 나ෆ'
    },
    {
      id: 3,
      img: 'https://photo.dalbitlive.com/clip_0/21475256400/20220508222201251813.png?292x292',
      type: '커버/노래',
      title: '코카인 청이 리액션 버전',
      nickName: 'ᴬᵀᴹ  Giyoo_🚀'
    }
    ,
    // {
    //   id: 4,
    //   img: 'https://photo.dalbitlive.com/clip_0/21390969600/20220222192757989375.jpeg?292x292',
    //   type: '커버/노래',
    //   title: '[플랫폼대전] 우주정복이 꿈인 남자',
    //   nickName: 'ᴵᴺᵀ 이 그 잼'
    // }
    // ,
    // {
    //   id: 5,
    //   img: 'https://photo.dalbitlive.com/clip_0/21156267600/20210728214012360478.jpeg?292x292',
    //   type: '커버/노래',
    //   title: '어떨 것 같아 (feat.코맹맹)',
    //   nickName: '청 이 💙₊'
    // }
    // ,
    // {
    //   id: 6,
    //   img: 'https://photo.dalbitlive.com/clip_3/clipbg_200910_1.jpg?292x292',
    //   type: '커버/노래',
    //   title: '애인있어요-이은미(커버)',
    //   nickName: '파란약'
    // }
    // ,
    // {
    //   id: 7,
    //   img: 'https://photo.dalbitlive.com/clip_0/21321331200/20211222134920027025.jpeg?292x292',
    //   type: '커버/노래',
    //   title: '(기유 이벤트) 미리솔크들하세연',
    //   nickName: '청 이 💙₊'
    // }
    // ,
    // {
    //   id: 8,
    //   img: 'https://photo.dalbitlive.com/clip_3/clipbg_200910_1.jpg?292x292',
    //   type: '커버/노래',
    //   title: '눈물편지(성시경)-커버',
    //   nickName: '파란약'
    // },
    // {
    //   id: 9,
    //   img: 'https://photo.dalbitlive.com/clip_3/clipbg_200910_0.jpg?292x292',
    //   type: '커버/노래',
    //   title: '사랑은 늘 도망가-임영웅(커버)',
    //   nickName: '파란약'
    // }
  ]

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return (

    <>
      
      <section className="hotClipWrap">
        <CntTitle ClipHeader = {HotClipTitle} />
        <Swiper {...swiperParams}>

          {HotClipList.map((data, index)=>{
            return (
              
              <SwiperSlide key={index}>
                <div>
                  <div className="hotClip">
                    <div className="photo">
                      <img src={data.img} />
                    </div>
                    <div className="info">
                      <img src="https://image.dalbitlive.com/clip/dalla/number-1.png" />
                      <div className="textArea">
                        <div>
                          <span className="type">{data.type}</span>
                          <span className="title">{data.title}</span>
                        </div>
                        <span className="nickName">{data.nickName}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="hotClip">
                    <div className="photo">
                      <img src={data.img} />
                    </div>
                    <div className="info">
                      <img src="https://image.dalbitlive.com/clip/dalla/number-1.png" />
                      <div className="textArea">
                        <div>
                          <span className="type">{data.type}</span>
                          <span className="title">{data.title}</span>
                        </div>
                        <span className="nickName">{data.nickName}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="hotClip">
                    <div className="photo">
                      <img src={data.img} />
                    </div>
                    <div className="info">
                      <img src="https://image.dalbitlive.com/clip/dalla/number-1.png" />
                      <div className="textArea">
                        <div>
                          <span className="type">{data.type}</span>
                          <span className="title">{data.title}</span>
                        </div>
                        <span className="nickName">{data.nickName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            );
          })
          }

        </Swiper>

      </section>
    </>

  );

};

export default HotClip;