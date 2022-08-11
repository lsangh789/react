import React from "react";

import CntTitle from "./CntTitle";
import TextSwiper from "./TextSwiper";

import '../css/clipDrawer.css';

const ClipList = () => {

  const cntTitleThree = [
    {
      title: '🎤커버노래은(는) 어떠세요?',
      button:'새로고침'
    }
  ]

  const coverSongList = [
    {
      id: 1,
      img: 'https://photo.dalbitlive.com/clip_0/20824923600/20201006221408337608.jpeg?292x292',
      title: '볼빨간사춘기-품 [유나✨]',
      nick: '유나✨ '
    },
    {
      id: 2,
      img: 'https://photo.dalbitlive.com/clip_0/21321284400/20211222035034215389.png?292x292',
      title: '기유캐롤이벤) mr.santa 헤븐',
      nick: '⟐ ʜᴇᴀᴠᴇɴ     ᑒꜝ'
    },
    {
      id: 3,
      img: 'https://photo.dalbitlive.com/clip_0/21117985200/20210624075551943928.jpeg?292x292',
      title: '마음 LIVE',
      nick: '헬이ᴴ˟˚          '
    },
    {
      id: 4,
      img: 'https://photo.dalbitlive.com/clip_0/21167406000/20210807000208137529.jpeg?292x292',
      title: '그_냥-듣고 자요cover',
      nick: '깨 뭉 다 ･̀Ⱉ･́'
    },
    {
      id: 5,
      img: 'https://photo.dalbitlive.com/clip_0/20992186800/20210304073100728408.jpeg?292x292',
      title: '도망가자 Live',
      nick: '헬이ᴴ˟˚          '
    },
  ]

  return (

    <section className="clipDrawer">

      <CntTitle ClipHeader={cntTitleThree} />
        <TextSwiper ClipSwiper={coverSongList} />

    </section>

  );

};

export default ClipList;