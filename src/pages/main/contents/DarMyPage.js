import React from "react";
import BannerWrap from "../components/BannerWrap";
import ClipHeader from "../components2/ClipHeader";
import MypageBottom from "../components5/MypageBottom";
import MypageTop from "../components5/MypageTop";

import '../css/mypage.css';

const DarMyPage = () => {

  const headerData = [
    {
      title: 'MY',
    }
  ]
  
  const myInfo = [
    {
      name: '메롱~😝마카롱**🍡💝',
      text: '식곤증에는 역시 달라죠!',
      level: 19,
      userId: 'zix9jvsd',
      fan: 9,
      star: 7,
      like: 13,
      dal: 3,
    }
  ]
  
  const myMenu = [
    {
      id: 'wallet',
      title: '내 지갑',
      empty: ''
    },
    {
      id: 'team',
      title: '팀',
      empty: 'yes',
    },
    {
      id: 'report',
      title: '방송리포트',
      empty: ''
    },
    {
      id: 'myclip',
      title: '클립 관리',
      empty: ''
    },
    {
      id: 'setting',
      title: '서비스 설정',
      empty: ''
    },
    {
      id: 'story',
      title: '사연 보관함',
      empty: ''
    },
    {
      id: 'alarm',
      title: '공지사항',
      empty: ''
    },
    {
      id: 'customer',
      title: '고객센터',
      empty: ''
    },
  ]
  
  const bannerList = [
    {
      img: 'https://image.dalbitlive.com/banner/2205/report.png'
    },
    {
      img: 'https://image.dalbitlive.com/banner/dalla_community.png'
    },
    {
      img: 'https://image.dalbitlive.com/banner/question_banner.png'
    }
  ]
  

  return(

    <div id="remypage">
      <ClipHeader Header={headerData} />
      <MypageTop myInfo={myInfo} myMenu={myMenu} />
      <BannerWrap bannerWrapList={bannerList} />
      <MypageBottom />
    </div>

  );

};

export default DarMyPage;