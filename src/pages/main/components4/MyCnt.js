import React from "react";

import '../css/myCnt.css';

const MyCnt = (props) => {

  const {cntTitleMini} = props;
  
  return (

    <>
      {cntTitleMini.map((item, idx)=>{
        return(
          <div className="cntTitle" key={idx}>
            <h2>{item.text}</h2>
            <div className="point">{item.title}</div>
          </div>
        );
      })
      }
    </>

  );

};

export default MyCnt; 