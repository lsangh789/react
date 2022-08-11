import React from "react";

import "../../../css/list.css";

const data = [
  {
    onOff: "off",
    p: "밝은창",
    img: "https://photo.dallalive.com/profile_3/profile_m_200327.jpg?292x292"
  },
  {
    onOff: "",
    p: "밝은창2",
    img: "https://photo.dallalive.com/profile_3/profile_m_200327.jpg?292x292"
  },
]

const data2 = [
  {
    onOff: "",
    p : "➶ 토 리 ☪︎·̩͙⁴",
    img : "https://photo.dallalive.com/profile_0/21501090000/20220531230435511229.png?292x292"
  },
  {
    onOff: "",
    p : "wal~wal~~    Hͮ",
    img : "https://photo.dallalive.com/profile_0/21433651200/20220401171320995468.png?292x292"
  }
]

const data22 = [
  {
    onOff: "",
    p : "Charming.W",
    img1 : "https://image.dallalive.com/team/parts/B/b002.png",
    img2 : "https://image.dallalive.com/team/parts/E/e007.png",
    img3 : "https://image.dallalive.com/team/parts/M/m009.png",
  },
  {
    onOff: "",
    p : "VIP",
    img1 : "https://image.dallalive.com/team/parts/B/b701.png",
    img2 : "https://image.dallalive.com/team/parts/E/e701.png",
    img3 : "https://image.dallalive.com/team/parts/M/m701.png",
  }
]

const data3 = [
  {
    onOff: "",
    img: "https://photo.dallalive.com/clip_0/21509982000/20220608094507683219.jpeg?292x292",
    title : "🎬달디:)폰서트💛",
    nick : "ᴴᴾ달디🍷 🎬💛"
  },
  {
    onOff: "",
    img: "https://photo.dallalive.com/clip_0/21508905600/20220607152710817246.jpeg?292x292",
    title: "걱정하지말아요 그대(생존신고)",
    nick : "🪢미니⁴ s(•̀ᴗ•́)و"
  }
]

const data4 = [
  {
    rank : 1,
    gender : "female",
    onOff : "",
    img : "https://photo.dallalive.com/profile_0/21497720400/20220528221410110787.png?292x292",
    nickNm : "🍎행 복🍎𝙃𝐕ᕷ🎀"
  },
  {
    rank : 2,
    gender : "male",
    onOff : "",
    img : "https://photo.dallalive.com/profile_0/21510075600/20220608234605818684.png?292x292",
    nickNm : "❛  아  트  ❜ "
  }
]

const data5 = [
  {
    rank : 1,
    img : "https://photo.dallalive.com/profile_0/21388723200/20220220174134132665.png?292x292",
    rankerNick: "반모_E",
    cupidImg : "https://photo.dallalive.com/profile_0/21505536000/20220604160244708887.png?292x292",
    cupidNick : ":)이연"
  },
  {
    rank : 2,
    img : "https://photo.dallalive.com/profile_0/21505536000/20220604160244708887.png?292x292",
    rankerNick: ":)이연",
    cupidImg : "https://photo.dallalive.com/profile_0/21501090000/20220531234829733115.png?292x292",
    cupidNick : "산이_E      ᪥ᵃ"
  },
  {
    rank : 3,
    img : "https://photo.dallalive.com/profile_0/21523460400/20220620093353527622.png?292x292",
    rankerNick: "무 진ෆ⸒⸒_🕊",
    cupidImg : "https://photo.dallalive.com/profile_0/21522337200/20220619015300966139.png?292x292",
    cupidNick : "Egg,🥚"
  }
]

const data6 = [
  {
    rank : 1,
    img : "https://photo.dallalive.com/clip_0/20845141200/20201024222209929936.jpeg?292x292",
    title : "췌코 - 고민 그리고...희망",
    nick : "𓆡 _깅체코 ♡˚"
  },
  {
    rank : 2,
    img : "https://photo.dallalive.com/clip_0/21479655600/20220512014654365304.jpeg?292x292",
    title : "신용재-고백 cover",
    nick : "엔 젤 🎵"
  },
  {
    rank : 3,
    img : "https://photo.dallalive.com/clip_0/21471793200/20220505005026308607.jpeg?292x292",
    title : "멜로망스-사랑인가봐 cover",
    nick : "엔 젤 🎵"
  },
]

const ListComponent = () => {

  const Photo = (props) => {
    const {children, src, photoName, onOff} = props;
    return (
      <div className={`${photoName} ${onOff ? onOff : ""}`}>
        <img src={src} />
        {children}
      </div>
    )
  }

  const ListContent = (props) => {
    const {children} = props;
    return (
      <div className="listContent">
        {children}
      </div>
    )
  }
  
  const RowList = (props) => {
    const {children, photo, photoName, thombIcon, play, rank} = props;
    return (
      <div className="listRow">
        {photo ?
        <Photo src={photo} photoName={photoName}>
          {thombIcon && 
          <div className={thombIcon}>
            <img />
          </div>
          }
          {play &&
            <span className={play}></span>
          }
        </Photo>
        :
        <></>
        }
        {rank &&
          <div className="rank">
            {rank}
          </div>
        }
        <ListContent>
          {children}
        </ListContent>
      </div>
    )
  }

  const ColList = (props) => {
    
    const {children} = props;

    return (
      <div className="listColumn">
        {children}
      </div>
    )
  }

  const ListWrap = (props) => {

    const { children, gender, nickNm, rank, photo, photoName } = props;

    return(
      <RowList rank={rank} photo={photo} photoName={photoName} >
        <div className="listItem">
          <em className={`gender ${gender}`}></em>
          <span className="nickNm">{nickNm}</span>
        </div>
        {children}
      </RowList>
    )

  }

  const Ranker = (props) => {
    
    const { children } = props;
    
    return (
      <div className="ranker">
        {children}
      </div>
    )
  }

  return(
    <>
      <section className="favorites">
        {data.map((data, index)=>{
          return(
            <ColList key={index}>
              <Photo photoName="photo" src={data.img} onOff={data.onOff}>
              </Photo>
              <p>{data.p}</p>
            </ColList>
          )
        })}
      </section>

      <section className="topTen">
        {data2.map((data, index)=>{
          return(
            <ColList key={index}>
              <Photo photoName="photo" src={data.img}>
                <div className={`rank-${index+1}`}></div>
              </Photo>
              <p className="nick">{data.p}</p>
            </ColList>
          )
        })}
      </section>

      <section className="topTen">
        {data22.map((data, index)=>{
          return(
            <ColList key={index}>
              <Photo photoName="teamSymbol" src={data.img1}>
                <img src={data.img2} />
                <img src={data.img3} />
                <div className={`rank-${index+1}`}></div>
              </Photo>
              <p className="nick">{data.p}</p>
            </ColList>
          )
        })}
      </section>

      <div className="liveListWrap">
        <RowList photo="https://photo.dallalive.com/profile_0/21501090000/20220531230435511229.png?292x292" photoName="photo">
          <div className="listItem">
            <em className="badgeItem starDj">스타DJ</em>
          </div>
          <div className="listItem"><span className="title">식곤증오기 딱좋은 시간</span></div>
          <div className="listItem">
            <em className="gender female"></em>
            <span className="nickNm">➶&nbsp;토&nbsp;리&nbsp;☪︎·̩͙⁴</span>
          </div>
          <div className="listItem">
            <span className="state">
              <i className="dataCnt totalCnt">73</i>
              <i className="dataCnt boostCnt">110</i>
            </span>
          </div>
        </RowList>
      </div>

      <div className="hotClip">
        <RowList photo="https://photo.dallalive.com/clip_0/21512228400/20220610021636722090.jpeg?292x292" photoName="photo">
          <div className="info">
            <img src="https://image.dallalive.com/clip/dalla/number-1.png" />
            <div className="textArea">
              <div>
                <span className="type">커버/노래</span>
                <span className="title">🎬달디:젝키-커플💛</span>
              </div>
              <span className="nickName">ᴴᴾ달디🍷 🎬💛</span>
            </div>
          </div>
        </RowList>
      </div>

      <section className="clip">
        {data3.map((data, index)=>{
          return(
            <ColList key={index}>
              <Photo src={data.img} photoName="photo">
              </Photo>
              <div className="title">{data.title}</div>
              <div className="nick">{data.nick}</div>
            </ColList>
          )
        })}
      </section>

      <section className="nowClipWrap">
        <RowList photo="https://photo.dallalive.com/clip_0/21523507200/20220620120408641646.jpeg?292x292" photoName="photo">
          <span className="title">경서 - 나의 X에게</span>
          <span className="nick">히릿ʕっ•ﻌ•ʔっ</span>
        </RowList>
      </section>

      <section className="live">
        <ColList>
          <Photo src="https://photo.dallalive.com/bg_0/21510028800/20220608100918402837.png?292x292" photoName="photo">
          </Photo>
          <p className="nick">Yun</p>
        </ColList>
      </section>

      <section className="dj">
        <ColList>
          <Photo src="https://image.dallalive.com/banner/1223/0303/55.Chunge.png?292x292" photoName="photo">
          </Photo>
          <div className="listItem">
            <em className="gender female" ></em>
            <p className="nick">청&nbsp;이&nbsp;💙₊</p>
          </div>
        </ColList>
        <button>+ 팬등록</button>
      </section>

      <section className="ranking" >
        <ColList>
          <Photo src="https://photo.dallalive.com/profile_0/21504366000/20220603013909129593.png?292x292" photoName="photo">
          </Photo>
          <div className="rankWrap">
            <div className="rank">1</div>
          </div>
          <div className="infoWrap">
            <div className="userNick">❥연_구름 ☁️</div>
          </div>
        </ColList>
      </section>

      <section className="dailyRankList">
        {data4.map((data, index)=>{
          return(
            <RowList photo={data.img} photoName="photo" rank={data.rank} key={index}>
              <div className="listItem">
                <em className={`gender ${data.gender}`}></em>
                <span className="nickNm">{data.nickNm}</span>
              </div>
            </RowList>
          )
        })}
      </section>

      <section className="myListWrap">
        <RowList photo="https://photo.dallalive.com/clip_0/20802412800/20200916162439278005.jpeg?292x292" photoName="photo">
          <div className="listItem">
            <span className="title">물고기 뽀꾸뮈 (  •)</span>
          </div>
          <div className="listItem">
            <em className="gender female"></em>
            <span className="nickNm">메롱~😝마카롱**🍡💝</span>
          </div>
          <div className="listItem">
            <i className="dataCnt listenerCnt">265</i>
            <i className="dataCnt presentCnt">11</i>
            <i className="dataCnt goodCnt">12</i>
            <i className="dataCnt replyCnt">1</i>
          </div>
        </RowList>
      </section>

      <section className="rankTop">
        <div className="topContent">
          {data5.map((data, index)=>{
            return(
              <Ranker key={index}>
                <ColList>
                  <Photo src={data.img} photoName="photo">
                    <div className={`rankerRank index${data.rank}`}></div>
                  </Photo>
                  <div className="rankerNick">{data.rankerNick}</div>
                </ColList>
                <div className="cupidWrap">
                  <div className="cupidHeader">HONEY</div>
                  <div className="cupidContent">
                    <div className="cupidThumb">
                      <img src={data.cupidImg} />
                    </div>
                    <div className="cupidNick">{data.cupidNick}</div>
                  </div>
                </div>
              </Ranker>
            )
          })}
        </div>

        <div className="listWrap">
          <ListWrap gender="male" nickNm="라 비     𝓖𝓗" rank={4} photo="https://photo.dallalive.com/profile_0/21521260800/20220618131931413273.png?292x292" photoName="photo">
            <div className="listItem">
              <i className="dataCnt starCnt">1</i>
              <i className="dataCnt listenPoint">28</i>
            </div>
          </ListWrap>
        </div>
      </section>

      <div className="rankerWrap">
        {data6.map((data, index)=>{
          return(
            <Ranker key={index}>
              <ColList>
                <Photo src={data.img} photoName="photo">
                  <div className="rank  first">{data.rank}</div>
                  <span className="play"></span>
                </Photo>
                <div className="title">{data.title}</div>
                <div className="nick">𓆡{data.nick}</div>
              </ColList>
            </Ranker>
          )
        })}
      </div>

      <div className="rankWrapRoList">
        <RowList photo="https://photo.dallalive.com/clip_3/clipbg_200910_0.jpg?292x292" photoName="photo" play="play">
          <div className="type">커버/노래</div>
          <div className="title">황인욱-포장마차 cover</div>
          <div className="nick">엔 젤 🎵</div>
        </RowList>
      </div>

    </>
  );

};

export default ListComponent;
