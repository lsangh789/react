import React from "react";

import '../css/cntTitle.css';

const CntTitle = (props) => {

  const {ClipHeader} = props;

  return (
    <>
      {ClipHeader.map((item, idx)=>{
        return(
          <div className="cntTitle" key={idx}>
            <h2>{item.title}</h2>
            <button>{item.button}</button>
          </div>
        );
      })
      }
    </>

  );

};

export default CntTitle;