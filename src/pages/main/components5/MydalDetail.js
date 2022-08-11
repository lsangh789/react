import React from "react";

import '../css/mydalDetail.css';

const MydalDetail = (props) => {

  const {myInfo} = props;

  return(

    <>
      {myInfo.map((data, index)=>{
        return(
          <div className="mydalDetail" key={index}>
            <div className="dalCount">
              <span>달 지갑</span>
              <div>
                <span>{data.dal}</span>
                개
              </div>
            </div>
            <div className="buttonGroup">
              <button className="charge">+ 충전하기</button>
            </div>
          </div>
        )

      })
      }


    </>

  );

};

export default MydalDetail;