import React from "react";

import CntTitle from "../components2/CntTitle";
import TextSwiper from "../components2/TextSwiper";

import '../css/clipDrawer.css';

const NowClip = () => {

  const cntTitle = [
    {
      title: '오늘 인기 있는 클립',
      button: ''
    }
  ]

  const clipDrawerList = [
    {
      id:1,
      img:'https://photo.dalbitlive.com/clip_0/21004542000/20210315000420004364.jpeg?292x292',
      title:'아카펠라)YOLO-스텔라장 cover',
      nick:'장희  ♩⋆         ε♡з  '
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/clip_0/21472963200/20220506123110541637.jpeg?292x292',
      title:'탑현 - 호랑수월가',
      nick:'김 현'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/clip_3/clipbg_200910_1.jpg?292x292',
      title:'눈물편지(성시경)-커버',
      nick:'파란약'
    },
    {
      id:4,
      img:'https://photo.dalbitlive.com/clip_0/21476286000/20220509055028681099.jpeg?292x292',
      title:'드라마-연애말고 결혼_예의바르게 이별',
      nick:'댕 루 나ෆ'
    },
    {
      id:5,
      img:'https://photo.dalbitlive.com/clip_0/21475256400/20220508222201251813.png?292x292',
      title:'코카인 청이 리액션 버전',
      nick:'ᴬᵀᴹ  Giyoo_🚀'
    },
    {
      id:6,
      img:'https://photo.dalbitlive.com/clip_0/21474086400/20220507155755246509.jpeg?292x292',
      title:'좋아해 -  🧀',
      nick:'💗나으 안꼬련 사랑한다💗'
    },
    {
      id:7,
      img:'https://photo.dalbitlive.com/clip_0/21470763600/20220504224917436937.jpeg?292x292',
      title:'숫자송 애교버전',
      nick:'🔥짱구✨️ɞᵭʚ'
    },
    {
      id:8,
      img:'https://photo.dalbitlive.com/clip_0/21471793200/20220505005026308607.jpeg?292x292',
      title:'멜로망스-사랑인가봐 cover',
      nick:'엔 젤 🎵'
    },
    {
      id:9,
      img:'https://photo.dalbitlive.com/clip_0/21475209600/20220508150047665153.jpeg?292x292',
      title:'좋은 사람 있으면 소개시켜줘 1절❣',
      nick:'츄즈  ૢ      💡₊'
    },
    {
      id:10,
      img:'https://photo.dalbitlive.com/clip_0/21474086400/20220507135215358435.jpeg?292x292',
      title:'아무 대화 <심심해>',
      nick:'히히ye'
    }
  ]

  return(

    <section className="clipDrawer">

      <CntTitle ClipHeader={cntTitle} />
        <TextSwiper ClipSwiper={clipDrawerList} />

    </section>

  );

};

export default NowClip;