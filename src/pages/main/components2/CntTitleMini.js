import React from "react";

import '../css/cntTitleMini.css';

const CntTitleMini = (props) => {

  const {ClipHeader} = props;

  return (
    <>
      {ClipHeader.map((item, idx)=>{
        return(
          <div key={idx}>
            <div className={`cntTitle${item.title === '' ? 'active' : ''} `} >
              <h2>
                <span className="nickName">{item.title}</span>
                {item.text}
              </h2>
            </div>
            <div className="subTitle">
              <h3>{item.miniTitle}</h3>
              <button>더보기</button>
            </div>
          </div>
        );
      })
      }
    </>

  );

};

export default CntTitleMini;