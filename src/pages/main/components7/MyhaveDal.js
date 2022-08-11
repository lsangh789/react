import React from "react";

import '../css/myhaveDal.css';

const MyhaveDal = (props) => {

  const {myhaveDal} = props;

  return(
    <>
      {myhaveDal.map((data, index)=>{
        return(
          <section className="myhaveDal" key={index}>
            <div className="title">{data.title}</div>
            <span className="dal">
              {data.dalCnt}
            </span>
          </section>
        )
      })
      }

    </>
  );
  
};

export default MyhaveDal;