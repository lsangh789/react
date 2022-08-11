import React from "react";

import '../css/inquireLog.css';

const InquireLog = (props) => {

  const {inputData} = props;

  return(

    <>
      <div id="inquireLog">
        <div className="inquireLogWrap">
        {inputData.map((data, idx)=>{
          return(
            <div className="inquireLogList" key={idx}>
              <div className="inquireLogState">
                <span className={`complete ${data.complete === 'y' ? '' : 'active'}`}>답변완료</span>
                <span className={`notComplete ${data.complete === '' ? '' : 'active'}`}>준비중...</span>
              </div>
              <div className="inquireLogTitle">
                {data.title}
              </div>
              <div className="inquireLogDate">
                {data.date}
              </div>
            </div>
          )
        })
        }
        </div>
      </div>
    </>

  );

};

export default InquireLog;