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

export const List1 = (props) => {

  const { children, classTabName, onOff, title, nick, pNick, gender, rankWrap } = props; 

  return(

    <>

      <div className={`${classTabName} ${onOff}`}>
        {children}
      </div>
      {pNick &&
        <p className="nick">{pNick}</p>
      }
      {title &&
        <>
          <div className="title">{title}</div>
          <div className="nick">{nick}</div>
        </>
      }
      {gender &&
        <div className="listItem">
          <em className={`gender ${gender}`}></em>
          <p className="nickNm">{nick}</p>
        </div>
      }
      {rankWrap &&
        <div className="rankWrap">
          <div className="rank">{rankWrap}</div>
        </div>
      }

    </>

  );

};

export const List2 = (props) => {

  const { children, em, title, gender, nickNm, state, totalCnt, boostCnt, likeCnt, listenerCnt, presentCnt, replyCnt } = props;

  return(
    <>
      
      {children}
      <div className="listContent">

        {em &&
          <div className="listItem">          
            <em className={`badgeItem ${em}`}>{em}</em>
          </div>
        }

        {title &&
          <div className="listItem">
            <span className="title">{title}</span>
          </div>
        }
        {gender &&
          <div className="listItem">
            <em className={`gender ${gender}`}></em>
            <span className="nickNm">{nickNm}</span>
          </div>
        }
        {state &&
          <div className="listItem">
            {totalCnt &&
              <i className="dataCnt totalCnt">{totalCnt}</i>
            }
            {boostCnt && 
              <i className="dataCnt boostCnt">{boostCnt}</i>
            }
            {listenerCnt &&
              <i className="dataCnt listenerCnt">{listenerCnt}</i>
            }
            {presentCnt &&
              <i className="dataCnt presentCnt">{presentCnt}</i>
            }
            {likeCnt && 
              <i className="dataCnt likeCnt">{likeCnt}</i>
            }
            {replyCnt &&
              <i className="dataCnt replyCnt">{replyCnt}</i>
            }
          </div>
        }
      </div>
      
    </>
  );

};

const ListComponent = () => {

  return(
    <>

      <section className="favorites">
        <div className="listColumn">
          {data.map((data, index)=>{
            return(
              <List1 classTabName="photo" onOff={data.onOff} pNick={data.p} key={index}>
                <img src={data.img} />
              </List1>
            )
          })}
        </div>
      </section>

      <section className="topTen">
        <div className="listColumn">
          {data2.map((data, index)=>{
            return(
              <List1 classTabName="photo" onOff={data.onOff} pNick={data.p} key={index}>
                <img src={data.img} />
                <div className={`rank-${index+1}`}></div>
              </List1>
            )
          })}
        </div>
      </section>

      <section className="topTen">
        <div className="listColumn">
          {data22.map((data, index)=>{
            return(
              <List1 classTabName="teamSymbol" onOff={data.onOff} pNick={data.p} key={index}>
                <img src={data.img1} />
                <img src={data.img2} />
                <img src={data.img3} />
                <div className={`rank-${index+1}`}></div>
              </List1>
            )
          })}
        </div>
      </section>

      <div className="liveListWrap">
        <div className="listRow">
          <List2 em="starDj" title="몰루야" gender="female" nickNm="몰루" state="state" totalCnt={350} boostCnt={188} >
            <div className="photo">
              <img src="https://photo.dallalive.com/bg_0/21510028800/20220608155927030255.jpeg?292x292" />
            </div>
          </List2>
        </div>
        <div className="listRow">
          <List2 title="몰루야야" gender="female" nickNm="몰루" state="state" totalCnt={328} likeCnt={128} >
            <div className="photo">
              <img src="https://photo.dallalive.com/bg_0/21510028800/20220608155927030255.jpeg?292x292" />
            </div>
          </List2>
        </div>
      </div>

      <section className="clip">
        <div className="listColumn">
          {data3.map((data, index)=>{
            return(
              <List1 classTabName="photo" onOff={data.onOff} title={data.title} nick={data.nick} key={index}>
                <img src={data.img} />
              </List1>
            )
          })}
        </div>
      </section>

      <section className="live">
        <div className="listColumn">
          <List1 classTabName="photo" onOff="" pNick="Yun">
            <img src="https://photo.dallalive.com/bg_0/21510028800/20220608100918402837.png?292x292" />
          </List1>
        </div>
      </section>

      <section className="dj">
        <div className="listColumn">
          <List1 classTabName="photo" onOff="" button="+ 팬등록" gender="female" nick="⁴뽀당뽀당 :💟">
            <img src="https://photo.dallalive.com/profile_0/21511152000/20220609102316860378.png?292x292" />
          </List1>
        </div>
        <button>+ 팬등록</button>
      </section>

      <section className="ranking" >
        <div className="listColumn">
          <List1 classTabName="photo" onOff="" rankWrap={1} >
            <img src="https://photo.dallalive.com/profile_0/21504366000/20220603013909129593.png?292x292" />
          </List1>
        </div>
        <div className="infoWrap">
          <div className="userNick">❥연_구름 ☁️</div>
        </div>
      </section>

      {data4.map((data, index)=>{
        return(
          <div className="fanCupid" key={index}>
            <div className="listRow">
              <List2 gender={data.gender} nickNm={data.nickNm}>
                <List1 classTabName="photo" onOff={data.onOff}>
                  <img src={data.img} />
                </List1>
                <div className="rank">{data.rank}</div>
              </List2>
            </div>
          </div>
        )
      })}

      <div className="listWrap" style={{backgroundColor: 'rgba(153, 190, 234, 0.16)'}}>
        <div className="listRow">
          <List1 classTabName="photo" onOff="">
            <img src="https://photo.dallalive.com/clip_0/21511152000/20220609145532537717.jpeg?292x292" />
          </List1>
          <div className="listContent">
            <span className="title">퇴근후 어린왕자 부르기!</span>
            <span className="nick">🪢미니⁴ s(•̀ᴗ•́)و</span>
          </div>
        </div>
      </div>

      <section className="listClip">
        <div className="listRow">
          <List2 title="물고기 뽀꾸뮈 >(  •)>" gender="female" nickNm="메롱~😝마카롱**🍡💝" state="state" listenerCnt={265} presentCnt={11} likeCnt={12} replyCnt={1} >
            <List1 classTabName="photo" onOff="">
              <img src="https://photo.dallalive.com/clip_0/20802412800/20200916162439278005.jpeg?292x292" />
            </List1>
          </List2>
          <div className="moreBtn"></div>
        </div>
      </section>

      <div className="hotClip">
        <List1 classTabName="photo" onOff="">
          <img src="https://photo.dallalive.com/clip_0/21512228400/20220610021636722090.jpeg?292x292" />
        </List1>
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
      </div>

    </>
  );

};

export default ListComponent;
