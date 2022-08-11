import React from "react";
import ClipHeader from "../components2/ClipHeader";
import DJSection from "../components3/DJSection";
import LiveSection from "../components3/LiveSection";
import NowClip from "../components3/NowClip";

import '../css/darSearch.css';

const DarSearch = () => {

  const ClipHeaders = [
    {
      title: '검색',
      button: '',
      search: 'yes',
    }
  ]
  
  const CntTitle = [
    {
      title: '🔥 지금 핫한 라이브',
      button: ''
    }
  ]
  
  const CntTitleDal = [
    {
      title: '방금 착륙한 NEW 달린이',
      button: ''
    }
  ]
  
  const CntTitleDJ = [
    {
      title: '믿고 보는 DJ',
      button: ''
    }
  ]
  
  const HotLiveList = [
    {
      id: 1,
      img: 'https://photo.dalbitlive.com/bg_0/21467300400/20220501050852191518.jpeg?292x292',
      p: '⁴빠 기🎰       🔧'
    },
    {
      id: 2,
      img: 'https://photo.dalbitlive.com/bg_0/21475256400/20220508213014228114.jpeg?292x292',
      p: '⌗김 챙 이ᵗᵃᵍ🏷  ⒒⁶'
    },
    {
      id: 3,
      img: 'https://photo.dalbitlive.com/bg_0/21478579200/20220511125738473092.jpeg?292x292',
      p: '씩 씩 입 니 다'
    },
    {
      id: 4,
      img: 'https://photo.dalbitlive.com/bg_0/21477409200/20220510023544972240.jpeg?292x292',
      p: 'L.서희만 출입가능'
    },
    {
      id: 5,
      img: 'https://photo.dalbitlive.com/bg_0/21478579200/20220511125202791738.jpeg?292x292',
      p: ' 🍁Lucy넬🍁'
    },
    {
      id: 6,
      img: 'https://photo.dalbitlive.com/bg_0/21476332800/20220509163458422035.png?292x292',
      p: '잘못했어.♥️'
    },
    {
      id: 7,
      img: 'https://photo.dalbitlive.com/bg_0/21477456000/20220510133622063313.jpeg?292x292',
      p: '🪢미니⁴ s(•̀ᴗ•́)و'
    },
    {
      id: 8,
      img: 'https://photo.dalbitlive.com/bg_0/21469593600/20220503184704931084.png?292x292',
      p: 'stay🧸'
    },
    {
      id: 9,
      img: 'https://photo.dalbitlive.com/bg_0/21477456000/20220510105140465171.jpeg?292x292',
      p: '무 제 ﾟ･♪⁺'
    },
    {
      id: 10,
      img: 'https://photo.dalbitlive.com/bg_0/21478579200/20220511130034860154.jpeg?292x292',
      p: '여 운'
    },
  
  ]
  
  const DalLiveList = [
    {
      id: 1,
      img: 'https://photo.dalbitlive.com/bg_0/21478579200/20220511132110894510.jpeg?292x292',
      p: '지 니 🦋'
    },
    {
      id:2,
      img:'https://photo.dalbitlive.com/bg_3/roombg_200708_2.jpg?292x292',
      p:' 왓능가'
    },
    {
      id:3,
      img:'https://photo.dalbitlive.com/bg_0/21478579200/20220511134020106419.jpeg?292x292',
      p:'혁이🤸‍♂️'
    },
    {
      id: 4,
      img: 'https://photo.dalbitlive.com/bg_0/21477409200/20220510023544972240.jpeg?292x292',
      p: 'L.서희만 출입가능'
    },
  ]

  return (

    <div id="searchPage">
      <ClipHeader Header={ClipHeaders} />
      <div className="subContent">
        <LiveSection cntTitle={CntTitle} hotLiveList={HotLiveList} />
        <LiveSection cntTitle={CntTitleDal} hotLiveList={DalLiveList} />
        <NowClip />
        <DJSection cntTitle={CntTitleDJ} />
      </div>

    </div>

  );

};

export default DarSearch;

