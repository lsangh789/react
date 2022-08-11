import React,{ useState } from "react";

import BackHeader from "../../components6/BackHeader";
import NativeTabMenu from "../../components5/NativeTabMenu";
import PeriodWrap from "../../components5/PeriodWrap";
import SummaryWrap from "../../components5/SummaryWrap";

import '../../css/report.css';

const SubReport = () => {

  const [click, setClick] = useState('방송');

  const reportBackHeader = [
    {
      title: '리포트',
      img: '',
      back: 'yes',
      type: ''
    }
  ]

  const reportTabMenu = [
    {
      className: 'active',
      text: '방송',
      value: '2022-05-12~2022-05-19',
      data: [
        {
          class: 'timeBroadcast',
          text: '방송시간',
          amount: '00:00:00'
        },
        {
          class: 'byeol',
          text: '받은 별',
          amount: 0,
        },
        {
          class: 'like',
          text: '좋아요',
          amount: 0,
        },
        {
          class: 'listen',
          text: '시청자',
          amount: 0,
        },
      ]
    },
    {
      className: '',
      text: '청취',
      value: '2022-05-12~2022-05-19',
      data: [
        {
          class: 'timeListen',
          text: '청취시간',
          amount: '00:00:00'
        },
        {
          class: 'dal',
          text: '달 선물',
          amount: 0
        },
      ]
    },
  ]

  return(
    <div id='report'>
      <BackHeader Header={reportBackHeader} />
      <NativeTabMenu nativeTabMenu={reportTabMenu} setClick={setClick} />

      {click === '방송' ? 
        reportTabMenu.map((data, index)=>{
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
        reportTabMenu.map((datas, idx)=>{
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

export default SubReport;