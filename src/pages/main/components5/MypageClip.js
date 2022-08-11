import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import BackHeader from "../components6/BackHeader"; 
import NativeTabMenu from "./NativeTabMenu";

import 'swiper/css';
import '../css/mypageClip.css';

const MypageClip = (props) => {

  const {Header} = props;
  const {nativeTabMenu} = props;

  const [click, setClick] = useState('업로드');

  const tabs = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('nativeTabmenus').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('nativeTabmenus').children[i];
      if(list.id === id){
        list.classList.add('active');
        setClick(list.innerHTML);
        console.log(click);
      } else {
        list.classList.remove('active');
      }
    }
    
  }
  
  const swiperParams = {
    slidesPerView: 'auto',
  }

  return (

    <div id="mypageClip">
      <BackHeader Header={Header} />
      <NativeTabMenu nativeTabMenu={nativeTabMenu} setClick={setClick} />
      <div className="contentWrap">
        <ul className="tabmenus"  >
          <Swiper {...swiperParams}>
          {nativeTabMenu.map((className, index)=>{
            return(
              click === className.text ?
              <React.Fragment key={index}>
                {className.tab.map((data, idx)=>{
                  return (
                    <SwiperSlide key={idx}>
                      <li onClick={tabs} className={data.className}>{data.text}</li>
                    </SwiperSlide>
                  )
                })}
              </React.Fragment>
              :
              ''
            )
          })
          }
        </Swiper>
        </ul>
        {nativeTabMenu.map((className, index)=>{
          return (
            <React.Fragment key={index}>
              {className.data.map((datas, index)=>{
                return (
                  <React.Fragment key={index}>
                    <section className="totalCountWrap">
                      <div className="total">
                        <div className="total">
                          {datas.imgs === '' ? '' : <img className="icon" src={datas.imgs} />}
                          <div className="title">{datas.title}</div>
                          <span className="count">{datas.cnt}{datas.cntText}</span>
                        </div>
                      </div>
                    </section>
                    <section className="listWrap">
                      {datas.cnt > 0 ? 
                      <div className="listRow">
                        <div className="photo">
                          <img src={datas.img} />
                        </div>
                        <div className="listInfo">
                          <div className="listItem">
                            <span className="title">{datas.imgTitle}</span>
                          </div>
                          <div className="listItem">
                            <em className="gender female"></em>
                            <span className="nickNm">{datas.nickNm}</span>
                          </div>
                          <div className="listItem">
                            <i className="dataCnt listenerCnt">{datas.listenerCnt}</i>
                            <i className="dataCnt presentCnt">{datas.presentCnt}</i>
                            <i className="dataCnt goodCnt">{datas.goodCnt}</i>
                            <i className="dataCnt replyCnt">{datas.replyCnt}</i>
                          </div>
                        </div>
                        <div className="moreBtn"></div>
                      </div>  
                      :
                      <div className="empty">
                        <p>
                          등록된 클립이 없어요
                          <br/>
                          클립을 업로드 해보세요!
                        </p>
                      </div>                 
                      }        
                    </section>     
                  </React.Fragment>
                )
              })}     
            </React.Fragment>
       
          )
        })}


      </div>
    </div>

  );

};

export default MypageClip;