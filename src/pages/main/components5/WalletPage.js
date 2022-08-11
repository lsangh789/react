import React,{ useState } from "react";

import BackHeader from "../components6/BackHeader";
import NativeTabMenu from "./NativeTabMenu";
import CurrentWrap from "./CurrentWrap";
import OptionWrap from "./OptionWrap";

import '../css/walletPage.css';

const WalletPage = (props) => {

  const {Header} = props;
  const {nativeTabMenu} = props;

  const [click, setClick] = useState('달 내역');

  return(

    <div id="walletPage">

      <BackHeader Header={Header} />
      <NativeTabMenu nativeTabMenu={nativeTabMenu} setClick={setClick} />

      {click === '달 내역' ?
        nativeTabMenu.map((datas, index)=>{
          return(
            <React.Fragment key={index}>
              {datas.text === '달 내역' ?   
              <>
                <CurrentWrap data={datas.data} />
                <OptionWrap />   
              </>
              :
              ''
              }
            </React.Fragment>
          )
        })
        :
       click === '별 내역' ?
       nativeTabMenu.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            {data.text === '별 내역' ? 
              <>
                <CurrentWrap data={data.data} />
                <OptionWrap />              
              </>
              :
              ''
            }
          </React.Fragment>
        )
      })
       :
       click === '환전' ?
       nativeTabMenu.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            {data.text === '환전' ? 
              <>
                <section className="doExchange">
                  <button className="noticeBtn">
                    <span className="noticeIcon">?</span>
                    환전이 궁금하시다면?
                  </button>
                  <div className="amountBox">
                    <i className="iconStar"></i>
                    <p>보유 별</p>
                    <div className="counter active">
                      <input className="num" disabled value="0" />
                      <span className="unit">개</span>
                    </div>
                  </div>
                  <div className="infoBoxs">
                    <p>별은 570개 이상이어야 환전 신청이 가능합니다.</p>
                    <p>별 1개당 KRW 60으로 환전됩니다.</p>
                  </div>
                  <div className="amountBox apply">
                    <i className="iconStar"></i>
                    <p>환전 신청 별</p>
                    <div className="counter">
                      <input className="num" disabled value="0" />
                      <span className="unit">개</span>
                    </div>
                  </div>
                  <div className="buttonGroup">
                    <button>환전 계산하기</button>
                  </div>
                </section>
              </>
              :
              ''
            }
          </React.Fragment>
        )
      })
       :
       ''
      }


    </div>

  );

};

export default WalletPage;
