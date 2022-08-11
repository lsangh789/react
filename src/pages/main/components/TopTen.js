import React, {useState} from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import TopTenTeam from "./TopTenTeam";
import TopTenDF from "./TopTenDF";

// Import Swiper styles
import 'swiper/css';
import '../css/topTen.css'

const tabmenu = ['DJ','FAN','TEAM'];

const TopTen = () => {

  const [types, setType] = useState(2);
  const [tabType, setTabType] = useState(tabmenu[2]);

  const swiperParams = {
    spaceBetween: 5,
    slidesPerView: 3.8,
  }

  const topTenInfo = [
    {
      type: 'dj',
      data: [
        {
          id: 1,
          img: 'https://photo.dalbitlive.com/profile_0/21451669200/20220417201344690123.png?292x292',
          nickNm: '청 이 💙₊',
        },
        {
          id: 2,
          img: 'https://photo.dalbitlive.com/profile_0/21454992000/20220420191158601933.png?292x292',
          nickNm: '음악의숲 ෆೄ'
        },
        {
          id: 3,
          img: 'https://photo.dalbitlive.com/profile_0/21472916400/20220506014729146891.png?292x292',
          nickNm: '⁴뽀당뽀당 :💟'
        },
        {
          id: 4,
          img: 'https://photo.dalbitlive.com/profile_0/21460654800/20220425232525785746.png?292x292',
          nickNm: '얀규마눌지'
        },
        {
          id: 5,
          img: 'https://photo.dalbitlive.com/profile_0/21470763600/20220504203848082943.png?292x292',
          nickNm: '🧸☹︎☺︎︎ 로 로'
        },
        {
          id: 6,
          img: 'https://photo.dalbitlive.com/profile_0/21449329200/20220415005709976508.png?292x292',
          nickNm: '𝙔𝙪𝙣 _'
        },
        {
          id: 7,
          img: 'https://photo.dalbitlive.com/profile_0/21450499200/20220416112249593971.png?292x292',
          nickNm: '🍎 행 복 🍎'
        },
        {
          id: 8,
          img: 'https://photo.dalbitlive.com/profile_0/21438190800/20220405213753366951.jpeg?292x292',
          nickNm: '김 현'
        },
        {
          id: 9,
          img: 'https://photo.dalbitlive.com/profile_0/21066364800/20210509112330478094.png?292x292',
          nickNm: ' Lucy넬🍁'
        },
        {
          id: 10,
          img: 'https://photo.dalbitlive.com/profile_0/21471886800/20220505231320363413.png?292x292',
          nickNm: '포 동 ꂓ ʚ⚚ɞ'
        },
      ]
    },
    {
      type: 'fan',
      data: [
        {
          id: 1,
          img: 'https://photo.dalbitlive.com/profile_0/21472916400/20220506010921382137.png?292x292',
          nickNm: 'ᴬᵀᴹ  Giyoo_🚀'
        },
        {
          id: 2,
          img: 'https://photo.dalbitlive.com/profile_0/20994433200/20210306014936604380.jpeg?292x292',
          nickNm: '셜록'
        },
        {
          id: 3,
          img: 'https://photo.dalbitlive.com/profile_0/21472916400/20220506014627431436.png?292x292',
          nickNm: '🌨 얘 팬'
        },
        {
          id: 4,
          img: 'https://photo.dalbitlive.com/profile_0/21470670000/20220504052527461812.png?292x292',
          nickNm: '아 니 ëĐ'
        },
        {
          id: 5,
          img: 'https://photo.dalbitlive.com/profile_0/21472963200/20220506141703399806.png?292x292',
          nickNm: '츄 ❀'
        },
        {
          id: 6,
          img: 'https://photo.dalbitlive.com/profile_0/21472963200/20220506140037695105.png?292x292',
          nickNm: '돌쇠ෆೄ'
        },
        {
          id: 7,
          img: 'https://photo.dalbitlive.com/profile_0/21472963200/20220506120249928134.png?292x292',
          nickNm: '❛  이  꾸  ❜'
        },
        {
          id: 8,
          img: 'https://photo.dalbitlive.com/profile_0/21471840000/20220505183256569199.png?292x292',
          nickNm: '햅삐한_랑해 ☘'
        },
        {
          id: 9,
          img: 'https://photo.dalbitlive.com/profile_0/21470716800/20220504105050940764.png?292x292',
          nickNm: 'L. 서  희'
        },
        {
          id: 10,
          img: 'https://photo.dalbitlive.com/profile_3/profile_m_200327.jpg?292x292',
          nickNm: '토링이네 ღ⋆⁺'
        },
      ]
    },
    {
      type: 'team',
      data: [
        {
          id: 1,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e007.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m007.png',
          rank: 1,
          nickNm : 'VIP'
        },
        {
          id: 2,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b003.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e007.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m010.png',
          rank: 2,
          nickNm : 'Limit.'
        },
        {
          id: 3,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e002.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m005.png',
          rank: 3,
          nickNm : 'On'
        },
        {
          id: 4,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b003.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e001.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m003.png',
          rank: 4,
          nickNm : 'F4'
        },
        {
          id: 5,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b003.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e012.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m010.png',
          rank: 5,
          nickNm : 'Fan.Limit'
        },
        {
          id: 6,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e002.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m008.png',
          rank: 6,
          nickNm : 'LINNEY'
        },
        {
          id: 7,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e003.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m001.png',
          rank: 7,
          nickNm : 'ëĐ'
        },
        {
          id: 8,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e012.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m011.png',
          rank: 8,
          nickNm : '고문러'
        },
        {
          id: 9,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b001.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e004.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m009.png',
          rank: 9,
          nickNm : 'ʚSNɞ'
        },
        {
          id: 10,
          imgBG: 'https://image.dalbitlive.com/team/parts/B/b002.png',
          imgAround: 'https://image.dalbitlive.com/team/parts/E/e007.png',
          imgIn: 'https://image.dalbitlive.com/team/parts/M/m010.png',
          rank: 10,
          nickNm : 'Heart'
        }
      ]
    },
    
  ]

  const tabmenuClick = (e, idx) => {
    const {targetTab} = e.currentTarget.dataset;

    if (targetTab === tabmenu[idx]) {
      setTabType(targetTab);
      setType(idx);
      console.log(targetTab);
      console.log(idx);
    }
  }

  return (

    <section className="topTen">
      <div className="cntTitle">
        <h2>🏆 NOW TOP 10  </h2>
        <ul className="subTabmenu">
          {tabmenu.map((list,index) => {
            return (
              <li className={list === tabType ? 'active' : ''} onClick={e => tabmenuClick(e,index)} data-target-tab={list} key={index}>{list}</li>
            )
          })}
        </ul>
      </div>
      {topTenInfo && topTenInfo.length > 0 &&
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {types === 2 ?
              
              <>
                {topTenInfo[types].data.map((v, idx) => {
                
                  return (
                  <div className="swiper-slide" key={idx}>
                    <div className="listColumn">
                      <div className="teamSymbol">
                        <img src={v.imgBG} />
                        <img src={v.imgAround} />
                        <img src={v.imgIn} />
                        <div className="rank" style={{background: `url('https://image.dalbitlive.com/main/dalla/number_W-${v.id}.png') center/cover no-repeat`}}></div>
                      </div>
                      <p>{v.nickNm}</p>
                    </div>
                  </div>
                  )
                })}
              </>
              :
              <>
                {topTenInfo[types].data.map((v, idx) => {
                  
                  return (
                  <div className="swiper-slide" key={idx}>
                    <div className="listColumn">
                      <div className="photo">
                        <img src={v.img} />
                        <div className="rank" style={{background: `url('https://image.dalbitlive.com/main/dalla/number_W-${v.id}.png') center/cover no-repeat`}}></div>
                      </div>
                      <p>{v.nickNm}</p>
                    </div>
                  </div>
                  )
                })}
              </>
            }
            
          </div>
        </div> 
      }
    </section>

  );

};

export default TopTen;