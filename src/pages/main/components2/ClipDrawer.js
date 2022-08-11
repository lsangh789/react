import React from "react";

import CntTitleMini from "./CntTitleMini";
import TextSwiper from "./TextSwiper";

import '../css/clipDrawer.css';

const ClipDrawer = () => {

  const cntTitle = [
    {
      title: '메롱~😝마카롱**🍡💝',
      text: '님의 클립서랍',
      miniTitle: '최근 들은 클립',
      button:'더보기'
    }
  ]

  const cntTitleTwo = [
    {
      title: '',
      text: '',
      miniTitle: '좋아요한 클립',
      button:'더보기'
    }
  ]

  const clipDrawerList = [
    {
      id:1,
      img:'https://photo.dalbitlive.com/clip_0/21467347200/20220501162822366190.jpeg?292x292',
      title: '노래를 잘못하지만 예쁘게들어주세요',
      nick: '츄💞'
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/clip_0/21321284400/20211222035034215389.png?292x292',
      title: '기유캐롤이벤) mr.santa 헤븐',
      nick: '⟐ ʜᴇᴀᴠᴇɴ     ᑒꜝ'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/clip_3/clipbg_200910_0.jpg?292x292',
      title: '다다',
      nick: '우다다다'
    },
    {
      id:4,
      img:'https://photo.dalbitlive.com/clip_0/21435897600/20220403160649869070.png?292x292',
      title: '나는 나비-윤도현밴드',
      nick: '…ㅎㅎ'
    },
    {
      id:5,
      img:'https://photo.dalbitlive.com/clip_0/21433604400/20220401014028726059.jpeg?292x292',
      title: 'black out',
      nick: '시 온_🦈  '
    },
    {
      id:6,
      img:'https://photo.dalbitlive.com/clip_0/20824923600/20201006221408337608.jpeg?292x292',
      title: '볼빨간사춘기-품 [유나✨]',
      nick: '유나✨ '
    },
    {
      id:7,
      img:'https://photo.dalbitlive.com/clip_0/21401078400/20220303135336130069.jpeg?292x292',
      title: '플라워-Endless(후라cover)',
      nick: '후라'
    },
    {
      id:8,
      img:'https://photo.dalbitlive.com/clip_0/20981001600/20210222160955871554.jpeg?292x292',
      title: 'ㅅㄷㅅㄷㅅㅌㅅㄴㄷ',
      nick: '🎼스파~이더🕷 :||'
    },
    {
      id:9,
      img:'https://photo.dalbitlive.com/clip_0/20802412800/20200916162439278005.jpeg?292x292',
      title: '물고기 뽀꾸뮈 >(  •)>',
      nick: '메롱~😝마카롱**🍡💝'
    },
    {
      id:10,
      img:'https://photo.dalbitlive.com/clip_0/21010251600/20210320225737199959.jpeg?292x292',
      title: '윤딴딴-니가 보고 싶은 밤',
      nick: '주인?'
    },
  ]

  const clipDrawerListTwo = [
    {
      id:1,
      img:'https://photo.dalbitlive.com/clip_0/21004542000/20210315000420004364.jpeg?292x292',
      title:'아카펠라)YOLO-스텔라장 cover',
      nick:'장희  ♩⋆         ε♡з  '
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/clip_0/20802412800/20200916160710219253.png?292x292',
      title:'클립이 오픈했다! 둠칫둠칫😏🎉',
      nick:'[운영자]시그니처 디자이너'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/clip_3/clipbg_200910_0.jpg?292x292',
      title:'다다',
      nick:'우다다다'
    },
    {
      id:4,
      img:'https://photo.dalbitlive.com/clip_0/20931580800/20210109130202087329.png?292x292',
      title:'킹스타_ cover by 쁠',
      nick:'Blue † ﻿`ෆ°₊'
    },
    {
      id:5,
      img:'https://photo.dalbitlive.com/clip_0/20923718400/20210102132042995162.jpeg?292x292',
      title:'호랑수월가 커버 ✮유별࿐',
      nick:'✮유별࿐ 😀'
    },
    {
      id:6,
      img:'https://photo.dalbitlive.com/clip_0/20958537600/20210202100550298941.jpeg?292x292',
      title:'귀여워 - Dear, Grooovin',
      nick:'Dear_🕊 '
    },
    {
      id:7,
      img:'https://photo.dalbitlive.com/clip_0/20802412800/20200916180604104913.jpeg?292x292',
      title:'Myself - Post Malone',
      nick:'CuSi'
    },
    {
      id:8,
      img:'https://photo.dalbitlive.com/clip_0/20961954000/20210205214516229705.jpeg?292x292',
      title:'초반 약 17초 소리 X',
      nick:'소_정'
    },
    {
      id:9,
      img:'https://photo.dalbitlive.com/clip_0/20803582800/20200917220203815934.jpeg?292x292',
      title:'MIDNIGHT🌙',
      nick:'쳄버라 ʷᵃʸ 🕋'
    },
    {
      id:10,
      img:'https://photo.dalbitlive.com/clip_0/20802412800/20200916170445012415.jpeg?292x292',
      title:'IU_자장가 covered by 휴디',
      nick:'휴 디 🌝'
    },

  ]

  return(

    <section className="clipDrawer">

      <CntTitleMini ClipHeader = {cntTitle}/>
        <TextSwiper ClipSwiper={clipDrawerList} />
      <CntTitleMini ClipHeader = {cntTitleTwo}/>
        <TextSwiper ClipSwiper={clipDrawerListTwo} />

    </section>

  )

}

export default ClipDrawer;