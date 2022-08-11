import React,{useState} from "react";

import BackHeader from "../components6/BackHeader";
import NativeTabMenu from "./NativeTabMenu";
import PeriodWrap from "./PeriodWrap";
import SummaryWrap from "./SummaryWrap";

import '../css/report.css';

const Report = (props) => {

  const {Header} = props;
  const {nativeTabMenu} = props;

  const [click, setClick] = useState('방송');

  return(

    <div id='report'>
      <BackHeader Header={Header} />
      <NativeTabMenu nativeTabMenu={nativeTabMenu} setClick={setClick} />

      {click === '방송' ? 
        nativeTabMenu.map((data, index)=>{
          return(
            <React.Fragment key={index}>
              {data.text === '방송' ? 
              <>
                <PeriodWrap value={data.value} />
                <SummaryWrap data={data.data} />
                <section className="detailWrap">
                  <div className="cntTitle">상세내역</div>
                </section>
              </>
                :
                ''
              }
            </React.Fragment>
          )

        })
        :
        click === '청취' ?
        nativeTabMenu.map((datas, idx)=>{
          return(
            <React.Fragment key={idx}>
              {datas.text === '청취' ? 
              <>
                <PeriodWrap value={datas.value} />
                <SummaryWrap data={datas.data} />
                <section className="detailWrap">
                  <div className="cntTitle">상세내역</div>
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

export default Report;