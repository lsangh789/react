import React from "react";
import BannerWrap from "../components/BannerWrap";
import ClipHeader from "../components2/ClipHeader";
import DailyRankList from "../components4/DailyRankList";
import MyRanking from "../components4/MyRanking";
import RankingTop from "../components4/RankingTop";

import '../css/rank.css';

const DarRank = () => {

  const RankingHeader = [
    {
      title: '랭킹',
      button: 'yes',
      btnText: '혜택',
      search: '',
    }
  ]
  
  const rankingChart = [
    {
      id: 1,
      now: '실시간',
      text: '타임',
      time: '01:17:34',
      chart: [
        {
          rank: 1,
          img: 'https://photo.dalbitlive.com/profile_0/21476332800/20220509163808842864.jpeg?292x292',
          usrNick: '후 니'
        },
        {
          rank: 2,
          img: 'https://photo.dalbitlive.com/profile_0/21477456000/20220510104018007741.png?292x292',
          usrNick: 'ᴵᴺᵀ 이 그 잼'
        },
        {
          rank: 3,
          img: 'https://photo.dalbitlive.com/profile_0/21478579200/20220511180531023763.png?292x292',
          usrNick: '청 이 💙₊'
        },
        {
          rank: 4,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512090119437400.png?292x292',
          usrNick: '토 리  ☪︎·̩͙ ⁴ '
        },
        {
          rank: 5,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512085430136889.png?292x292',
          usrNick: '⁴뽀당뽀당 :💟'
        },
        {
          rank: 6,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512092944652934.png?292x292',
          usrNick: '욘뀨징☹︎☺︎︎'
        },
        {
          rank: 7,
          img: 'https://photo.dalbitlive.com/profile_0/21466224000/20220430192502272297.png?292x292',
          usrNick: '신냔니          '
        },
        {
          rank: 8,
          img: 'https://photo.dalbitlive.com/profile_0/21479702400/20220512140122192710.png?292x292',
          usrNick: '찌니  🍞'
        },
        {
          rank: 9,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512084337643852.png?292x292',
          usrNick: '서 나 ❀'
        },
        {
          rank: 10,
          img: 'https://photo.dalbitlive.com/profile_0/21476286000/20220509000251051251.png?292x292',
          usrNick: '뽀 짝 '
        },
      ]
    },
    {
      id: 2,
      now: '',
      text: '일간',
      time: '15:04:34',
      chart: [
        {
          rank: 1,
          img: 'https://photo.dalbitlive.com/profile_0/21476332800/20220509163808842864.jpeg?292x292',
          usrNick: '후 니'
        },
        {
          rank: 2,
          img: 'https://photo.dalbitlive.com/profile_0/21477456000/20220510104018007741.png?292x292',
          usrNick: 'ᴵᴺᵀ 이 그 잼'
        },
        {
          rank: 3,
          img: 'https://photo.dalbitlive.com/profile_0/21478579200/20220511180531023763.png?292x292',
          usrNick: '청 이 💙₊'
        },
        {
          rank: 4,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512090119437400.png?292x292',
          usrNick: '토 리  ☪︎·̩͙ ⁴ '
        },
        {
          rank: 5,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512085430136889.png?292x292',
          usrNick: '⁴뽀당뽀당 :💟'
        },
        {
          rank: 6,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512092944652934.png?292x292',
          usrNick: '욘뀨징☹︎☺︎︎'
        },
        {
          rank: 7,
          img: 'https://photo.dalbitlive.com/profile_0/21466224000/20220430192502272297.png?292x292',
          usrNick: '신냔니          '
        },
        {
          rank: 8,
          img: 'https://photo.dalbitlive.com/profile_0/21479702400/20220512140122192710.png?292x292',
          usrNick: '찌니  🍞'
        },
        {
          rank: 9,
          img: 'https://photo.dalbitlive.com/profile_0/21479655600/20220512084337643852.png?292x292',
          usrNick: '서 나 ❀'
        },
        {
          rank: 10,
          img: 'https://photo.dalbitlive.com/profile_0/21476286000/20220509000251051251.png?292x292',
          usrNick: '뽀 짝 '
        },
      ]
    },
    {
      id: 3,
      now: '',
      text: '주간',
      time: '5월 셋째주',
      chart: [
        {
          rank: 1,
          img: "https://photo.dalbitlive.com/profile_0/21451669200/20220417211938083933.png?292x292",
          usrNick: "세 아.♥️"
        },
        {
          rank: 2,
          img: "https://photo.dalbitlive.com/profile_0/21477409200/20220510050708730835.png?292x292",
          usrNick: "댕 루 나ෆ"
        },
        {
          rank: 3,
          img: "https://photo.dalbitlive.com/profile_0/21479655600/20220512090119437400.png?292x292",
          usrNick: "토 리  ☪︎·̩͙ ⁴ "
        },
        {
          rank: 4,
          img: "https://photo.dalbitlive.com/profile_0/21465147600/20220429222055006606.png?292x292",
          usrNick: "소쿠리 'ڡ'"
        },
        {
          rank: 5,
          img: "https://photo.dalbitlive.com/profile_0/21479655600/20220512000943380776.png?292x292",
          usrNick: "L. 서  희"
        },
        {
          rank: 6,
          img: "https://photo.dalbitlive.com/profile_0/21477456000/20220510104018007741.png?292x292",
          usrNick: "ᴵᴺᵀ 이 그 잼"
        },
        {
          rank: 7,
          img: "https://photo.dalbitlive.com/profile_0/21476332800/20220509163808842864.jpeg?292x292",
          usrNick: "후 니"
        },
        {
          rank: 8,
          img: "https://photo.dalbitlive.com/profile_0/21478532400/20220511022141188887.png?292x292",
          usrNick: "달디🎬💛    👼🏻੭"
        },
        {
          rank: 9,
          img: "https://photo.dalbitlive.com/profile_0/21404494800/20220306230957022325.png?292x292",
          usrNick: "𝑯: 하늘˚"
        },
        {
          rank: 10,
          img: "https://photo.dalbitlive.com/profile_0/21478626000/20220511234106318610.png?292x292",
          usrNick: "빈이🌠-"
        },
      ]
    },
    {
      id: 4,
      now: '',
      text: '월간',
      time: '22년 05월',
      chart: [
        {
          rank: 1,
          img: "https://photo.dalbitlive.com/profile_0/21451669200/20220417211938083933.png?292x292",
          usrNick: "세 아.♥️"
        },
        {
          rank: 2,
          img: "https://photo.dalbitlive.com/profile_0/21454945200/20220420002343643479.png?292x292",
          usrNick: "ᴬᵀᴹ  Giyoo_🚀"
        },
        {
          rank: 3,
          img: "https://photo.dalbitlive.com/profile_0/21465147600/20220429222055006606.png?292x292",
          usrNick: "소쿠리 'ڡ'"
        },
        {
          rank: 4,
          img: "https://photo.dalbitlive.com/profile_0/21468470400/20220502170539958483.png?292x292",
          usrNick: "채 리     *𝒄𝒉𝒂𝒆."
        },
        {
          rank: 5,
          img: "https://photo.dalbitlive.com/profile_0/21478579200/20220511113233257420.png?292x292",
          usrNick: "온 유💡₊     🔧🚀"
        },
        {
          rank: 6,
          img: "https://photo.dalbitlive.com/profile_0/21475162800/20220508020822355759.png?292x292",
          usrNick: "청 이 💙₊"
        },
        {
          rank: 7,
          img: "https://photo.dalbitlive.com/profile_0/21460608000/20220425131914564845.png?292x292",
          usrNick: "삐 아 🦋"
        },
        {
          rank: 8,
          img: "https://photo.dalbitlive.com/profile_0/21479655600/20220512090119437400.png?292x292",
          usrNick: "토 리  ☪︎·̩͙ ⁴ "
        },
        {
          rank: 9,
          img: "https://photo.dalbitlive.com/profile_0/21479655600/20220512000943380776.png?292x292",
          usrNick: "L. 서  희"
        },
        {
          rank: 10,
          img: "https://photo.dalbitlive.com/profile_0/21478626000/20220511234106318610.png?292x292",
          usrNick: "빈이🌠-"
        },
      ]
    },
    {
      id: 5,
      now: '',
      text: '연간',
      time: '2022년',
      chart: [
        {
          rank: 1,
          img: "https://photo.dalbitlive.com/profile_0/21451669200/20220417211938083933.png?292x292",
          usrNick: "세 아.♥️"
        },
        {
          rank: 2,
          img: "https://photo.dalbitlive.com/profile_3/profile_m_200327.jpg?292x292",
          usrNick: ". . . . ."
        },
        {
          rank: 3,
          img: "https://photo.dalbitlive.com/profile_0/21475162800/20220508020822355759.png?292x292",
          usrNick: "청 이 💙₊"
        },
        {
          rank: 4,
          img: "https://photo.dalbitlive.com/profile_0/21460608000/20220425131914564845.png?292x292",
          usrNick: "삐 아 🦋"
        },
        {
          rank: 5,
          img: "https://photo.dalbitlive.com/profile_0/21478579200/20220511113233257420.png?292x292",
          usrNick: "온 유💡₊     🔧🚀"
        },
        {
          rank: 6,
          img: "https://photo.dalbitlive.com/profile_0/21477502800/20220510210534481788.png?292x292",
          usrNick: "지니남편 얀 규    ⒌¹²"
        },
        {
          rank: 7,
          img: "https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg?292x292",
          usrNick: "해나잉뎅"
        },
        {
          rank: 8,
          img: "https://photo.dalbitlive.com/profile_0/21477456000/20220510104018007741.png?292x292",
          usrNick: "ᴵᴺᵀ 이 그 잼"
        },
        {
          rank: 9,
          img: "https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg?292x292",
          usrNick: "Dear_🕊 "
        },
        {
          rank: 10,
          img: "https://photo.dalbitlive.com/profile_0/21478532400/20220511053154668733.png?292x292",
          usrNick: "⁴옹기종기 🤟"
        },
      ]
    },
    
  ]
  
  const cntTitleMini = [
    {
      title: '메롱~😝마카롱**🍡💝',
      text: '님의 오늘 순위는?',
    }
  ]
  
  const dailyCntTitle = [
    {
      title: '일간 FAN / CUPID',
      button: '더보기'
    }
  ]
  
  const myRankingList = [
    {
      title: 'DJ',
      rank: '1',
      day: 'daily'
    },
    {
      title: 'FAN',
      rank: '2',
      day: 'daily'
    },
    {
      title: 'CUPID',
      rank: '4',
      day: 'daily'
    },
    {
      title: 'TEAM',
      rank: '10',
      day: 'weekly'
    },
  ]
  
  const dailyList = [
    {
      type: 'FAN', 
      datas: [
        {
          rank:1,
          photo:'https://photo.dalbitlive.com/profile_0/21479655600/20220512035357749755.png?292x292',
          badge:'no',
          gender: 'g',
          nick:'지니동생Piana ⒒⁶ ⒌¹²',
          starCnt: '9',
          listenPoint: '712'
      
        },
        {
          rank:2,
          photo:'https://photo.dalbitlive.com/profile_0/21477456000/20220510172636613116.png?292x292',
          badge:'listener',
          gender: 'm',
          nick:'독우',
          starCnt: '6',
          listenPoint: '317'
      
        },
        {
          rank:3,
          photo:'https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg?292x292',
          badge:'no',
          gender: 'g',
          nick:'ᴬᵀᴹ u_u_🚀',
          starCnt: '11',
          listenPoint: '414'
      
        },
        {
          rank:4,
          photo:'https://photo.dalbitlive.com/profile_0/21479655600/20220512092944652934.png?292x292',
          badge:'live',
          gender: 'g',
          nick:'욘뀨징☹︎☺︎︎',
          starCnt: '24',
          listenPoint: '384'
      
        },
        {
          rank:5,
          photo:'https://photo.dalbitlive.com/profile_0/21470670000/20220504045259861357.png?292x292',
          badge:'no',
          gender: 'm',
          nick:'αγάπη ☪︎·̩͙ ⁴',
          starCnt: '20',
          listenPoint: '146'
      
        },
      ]
    },
  
    {
      type: 'CUPID', 
      datas: [
        {
          rank:1,
          photo:'https://photo.dalbitlive.com/profile_0/21479702400/20220512135341214649.png?292x292',
          badge:'no',
          gender: 'm',
          nick:'지니동생',
          cupid: '토 리  ☪︎·̩͙ ⁴ ',
          djGoodPoint: '262'
      
        },
        {
          rank:2,
          photo:'https://photo.dalbitlive.com/profile_0/21479702400/20220512135341214649.png?292x292',
          badge:'no',
          gender: 'g',
          nick:'독우',
          cupid: '얀규마눌지니⒒⁶🎂-Dday',
          djGoodPoint: '151'
      
        },
        {
          rank:3,
          photo:'https://photo.dalbitlive.com/profile_0/21475256400/20220508215231173253.png?292x292',
          badge:'no',
          gender: 'm',
          nick:'ᴬᵀᴹ u_u_🚀',
          cupid: "헌 이   '◡'✿",
          djGoodPoint: '101'
        },
        {
          rank:4,
          photo:'https://photo.dalbitlive.com/profile_0/21466224000/20220430194929440034.png?292x292',
          badge:'no',
          gender: 'm',
          nick:'욘뀨징☹︎☺︎︎',
          cupid: '달디🎬💛',
          djGoodPoint: '101'
      
        },
        {
          rank:5,
          photo:'https://photo.dalbitlive.com/profile_0/21479702400/20220512135341214649.png?292x292',
          badge:'live',
          gender: 'g',
          nick:'토 리  ☪︎·̩͙ ⁴ ',
          cupid: '욘뀨징☹︎☺︎︎',
          djGoodPoint: '61'
      
        },
      ]
    }
  
  ]
  
  const bannerWrapList = [
    {
      id:1,
      img:'https://image.dalbitlive.com/banner/dalla/page/ranking_honor.png'
    },
    {
      id:2,
      img:'https://image.dalbitlive.com/banner/2022/rcdj.png'
    },
  
  ]
  
  const rankingBackHeader = [
    {
      title: '랭킹 전체',
      img: '',
      back: 'yes',
      type: 'benefits',
      text:'혜택',
    }
  ]

  return (

    <div id="renewalRanking">
      <ClipHeader Header={RankingHeader} />
      <RankingTop chartSwiper={rankingChart} />
      <MyRanking cntTitleMini={cntTitleMini} myRankingList={myRankingList} />
      <BannerWrap bannerWrapList={bannerWrapList} />
      <DailyRankList ClipHeader={dailyCntTitle} dailyList={dailyList} />
    </div>

  );

};

export default DarRank;