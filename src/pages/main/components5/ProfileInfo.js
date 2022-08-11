import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from "./Box";

import 'swiper/css';

const ProfileInfo = (props) => {

  const {profileList} = props;
  const {rankInfo} = props;
  const {ranInfoImg} = props;

  const swiperParams = {
    slidesPerView: 'auto',
  }

  return(

    <section className="profileInfo">
      <div className="rankInfo">
        <Box rankInfo={rankInfo} />
        <Box rankInfo={ranInfoImg} />
      </div>
      {profileList.map((data, index)=>{
        return(
          <>
            <div className="comment" key={index}>
              <div className="title">코멘트</div>
              <div className="text">{data.comment}</div>
            </div>

            <div className="broadcastNotice">
              <div className="title">방송공지</div>
              <Swiper
                {...swiperParams}
              >
              {data.liveSwiper.map((list, idx)=>{
                return(
                  <SwiperSlide key={idx}>
                    <div className="noticeBox">
                      <div className="badge">{list.badge}</div>
                      <div className="text">{list.text}</div>
                      <div className="info">
                        <i className="likeOff">{list.like}</i>
                        <i className="cmt">{list.cmt}</i>
                        <span className="time">{list.time}</span>
                      </div>
                      <div className="fixIcon">
                        <img src={list.img} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
                })
              }
              </Swiper>
            </div>
          </>
        )
      })
      }

    </section>

  );

};

export default ProfileInfo;