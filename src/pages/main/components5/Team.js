import { Swiper, SwiperSlide } from "swiper/react";

import BackHeader from "../components6/BackHeader";

import 'swiper/css';
import 'swiper/css/pagination';
import '../css/team.css';

const Team = (props) => {

  const {Header} = props;
  const {teamData} = props;

  const swiperParams = {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: true

  }

  return(
    
    <div id="team">
      <BackHeader Header={Header} />
      <div id="cntWrapper">
        <Swiper {...swiperParams} >
        {teamData.map((data, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="slideTitle">
                <div className="title">{data.title}</div>
                <div className="subTitle">{data.subTitle}</div>
              </div>
              <div className="imgItem">
                <img src={data.img} />
              </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
        <div className="titleWrap">
          <h2>나를 초대한 팀</h2>
        </div>
        <div className="listNone">
          아직 나를 초대한 팀이 없어요.
          <br/>
          어떤 팀이 있는지 볼까요?
          <button>팀 랭킹 보기</button>
        </div>
        <div className="buttonWrap">
          <button type="button" className="submitBtn">팀 만들기</button>
        </div>
      </div>
    </div>

  );

};

export default Team;