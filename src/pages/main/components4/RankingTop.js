import React,{ useState } from "react";

import ChartSwiper from "./ChartSwiper";
import PopSlide from "./PopSlide";

import '../css/rankingTop.css';
import '../css/popSlide.css';

const RankingTop = (props) => {

  const {chartSwiper} = props;

  const chart = ['타임','일간','주간','월간','연간'];
  const [chartNext, setChartNext] = useState(chart[1]);
  const [num, setNum] = useState(1);
  const [clickPopUp, setClickPopUp] = useState('no');

  const chartUp = () => {
    setNum(num + 1);
    setChartNext(chart[num + 1]);
    console.log(num);

    if(num === 4){
      setChartNext(chart[0]);
    }
    if(num === 5){
      setNum(1);
      setChartNext(chart[1]);
    }

  }

  const popUpClick = (e) => {

    const popUpId = document.getElementById('popSlide');

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('select').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('select').children[i];
      if(list.id === id){
        setNum(i+1);
        popUpId.classList.add('active');
        setClickPopUp('no');
      } 
    }

  }

  const popUp = () => {

    const popUpId = document.getElementById('popSlide');

    if(clickPopUp === 'no'){
      popUpId.classList.remove('active');
      setClickPopUp('yes');
      console.log(chartNext);
    }else if (clickPopUp === 'yes'){
      popUpId.classList.add('active');
      setClickPopUp('no');
      console.log(chartNext);
    }

  }

  return (

    <>
    
    <section className="rankingTop">

      {chartSwiper.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            {data.id === num ? 
              <>
                <button className="rankingTopMore">더보기</button>
                <div className="title" onClick={popUp}>
                  <div>
                    DJ {data.now}
                  </div>
                  <div>
                    <strong>{data.text}</strong>
                    차트
                    <span className="optionSelect"></span>
                  </div>
                </div>
                <span className="countDown">{data.time}</span>
                <div className="criteria">
                  <div className="relative">
                    <div className="clickArea"></div>
                  </div>
                </div>
                <div className="chartSwiper">
                  <ChartSwiper chartSwiper={data.chart} />
                </div>
                <div className="refreshWrap" onClick={chartUp}>
                  <span className="refreshIcon"></span>
                  <p className="refreshText">
                    <strong>{chartNext}</strong>
                    이 궁금하다면?
                  </p>
                  <span className="refreshNum">
                    <span>{data.id}</span>
                    /5
                  </span>
                </div>
              </>
              :
              ''
            }
            
          </React.Fragment>
        )
      })
      }
      
    </section>

    <PopSlide chart={chart} num={num} chartUp={popUpClick} />

    </>
  );

};

export default RankingTop;