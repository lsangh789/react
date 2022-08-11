import React, {useState} from "react";

import Live from "./Live";

import '../css/liveContents.css'

const LiveContents = () => {

    // liveContents data
    const liveContentsInfo = [
      {
        id: 1,
        img: "https://photo.dalbitlive.com/profile_0/21463930800/20220428050322153940.png?292x292",
        title: "아침에 일찍 일어난새가 진짜피곤함",
        gender: "male",
        nickNm: "에 드 ëĐ",
        totalCnt: 24,
        entryCbt: 10,
        likeCnt: 10,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 2,
        img: "https://photo.dalbitlive.com/profile_0/21447082800/20220413090734803799.png?292x292",
        title: "곤피곤피",
        gender: "male",
        nickNm: "무진응고안에우유가득",
        totalCnt: 36,
        entryCbt: 17,
        likeCnt: 37,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 3,
        img: "https://photo.dalbitlive.com/profile_0/21472916400/20220506072906672416.png?292x292",
        title: "방갑습니다",
        gender: "male",
        nickNm: "지설수",
        totalCnt: 8,
        entryCbt: 1,
        likeCnt: 3,
        newdj: '신입DJ',
        types: 'RADIO' 
      },
      {
        id: 4,
        img: "https://photo.dalbitlive.com/profile_0/21389799600/20220221004733851466.png?292x292",
        title: "25) 안녕",
        gender: "female",
        nickNm: "그림자단 시아꽃 [舞影] ",
        totalCnt: 24,
        entryCbt: 6,
        likeCnt: 21,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 5,
        img: "https://photo.dalbitlive.com/profile_0/21451669200/20220417203219256293.png?292x292",
        title: "잠방 ㅇㅁㅇ",
        gender: "female",
        nickNm: "센 너 굴 s(•̀ᴗ•́)و",
        totalCnt: 6,
        entryCbt: 6,
        likeCnt: 4,
        newdj: '신입DJ',
        types: 'VIDEO' 
      },
      {
        id: 6,
        img: "https://photo.dalbitlive.com/profile_0/21066364800/20210509112330478094.png?292x292",
        title: "출근길 신나는 음악과 함께 ~",
        gender: "female",
        nickNm: " Lucy넬🍁",
        totalCnt: 15,
        entryCbt: 4,
        likeCnt: 9,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 7,
        img: "https://photo.dalbitlive.com/profile_0/21410064000/20220311131026659002.png?292x292",
        title: "잠방인데",
        gender: "male",
        nickNm: "🏁씽유~♡",
        totalCnt: 11,
        entryCbt: 1,
        likeCnt: 3,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 8,
        img: "https://photo.dalbitlive.com/profile_0/21468517200/20220502202842670451.jpeg?292x292",
        title: "방송방송",
        gender: "male",
        nickNm: "천사쟁이 ",
        totalCnt: 7,
        entryCbt: 0,
        likeCnt: 0,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 9,
        img: "https://photo.dalbitlive.com/profile_0/21422372400/20220322090501715643.png?292x292",
        title: "소통 고민이야기방",
        gender: "male",
        nickNm: "젠퍼ʚɞ",
        totalCnt: 3,
        entryCbt: 3,
        likeCnt: 1,
        newdj: 'no',
        types: 'RADIO' 
      },
      {
        id: 10,
        img: "https://photo.dalbitlive.com/profile_0/21397755600/20220228233729684168.png?292x292",
        title: "아무나와주세요",
        gender: "male",
        nickNm: "나우쵸",
        totalCnt: 2,
        entryCbt: 2,
        likeCnt: 0,
        newdj: 'no',
        types: 'RADIO' 
      },
      

    ]

    const [live, setLive] = useState('전체')

    const liveOn = (e) => {

      const id = e.currentTarget.id;
      const tabLength = document.getElementById('liveTab').children.length;

      for(let i = 0; i < tabLength; i++){
        const list = document.getElementById('liveTab').children[i];
        if(list.id === id){
          list.classList.add('active');
          setLive(list.innerHTML);
          console.log(live);
        } else {
          list.classList.remove('active');
        }
      }
      
    }

  return (

    <section className="liveContents">

      <div className="cntTitle">
        <h2>🚀 지금 라이브 중!</h2>
      </div>
      <div className="tabmenuWrap">
        <ul className="tabmenu" id="liveTab">
          <li id="liveAll" onClick={liveOn} className="active" datatype="전체">전체</li>
          <li id="liveVideo" onClick={liveOn} datatype="VIDEO">VIDEO</li>
          <li id="liveRadio" onClick={liveOn} datatype="RADIO">RADIO</li>
          <li id="liveDj" onClick={liveOn} datatype="신입DJ">신입DJ</li>
          <div className="underline"></div>
        </ul>
      </div>
      <div className="liveListWrap" >
        {liveContentsInfo.map((data, index) => {

          return (
            data.types === live ?
              <Live contents={data} key={index} />
                :
               data.newdj === live ?
                <Live contents={data} key={index} />
                :
                live === '전체' ?
                  <Live contents={data} key={index} />
                  :
                  null
          )

        })
        }
      </div>
      

    </section>

  );

};

export default LiveContents;