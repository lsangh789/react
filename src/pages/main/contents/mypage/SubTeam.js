import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import BackHeader from "../../components6/BackHeader";

import 'swiper/css';
import 'swiper/css/pagination';
import '../../css/team.css';


const SubTeam = () => {

  const teamBackHeader = [
    {
      title: '팀',
      img: '',
      back: 'yes',
      type: ''
    }
  ]

  const teamData = [
    {
      title: '우리팀 심볼은 뭐가 좋을까?',
      subTitle: '1,000가지의 심볼 조합',
      img: 'https://image.dalbitlive.com/team/slideImg-1.png'
    },
    {
      title: '활동배지와 추가 경험치를 받아보세요!',
      subTitle: '멤버 모두가 받게 되는 혜택',
      img: 'https://image.dalbitlive.com/team/slideImg-2.png'
    },
    {
      title: '팀 랭킹에 오르면 리워드 지급!',
      subTitle: '리워드 역시 모든 멤버에게',
      img: 'https://image.dalbitlive.com/team/slideImg-3.png'
    },
    {
      title: '지금 팀 활동을 시작하세요!',
      subTitle: '',
      img: 'https://image.dalbitlive.com/team/slideImg-4.png'
    },
  ]

  const swiperParams = {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: true

  }

  return (

    <div id="team">
      <BackHeader Header={teamBackHeader} />
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

export default SubTeam;