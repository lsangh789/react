import React from "react";

const SummaryWrap = (props) => {

  const {data} = props;

  return (

    <section className="summaryWrap">
      <div className="cntTitle">방송요약</div>
      {data.map((list, index)=>{
        return(
          <React.Fragment key={index}>
            <div className="summaryList">
              <i className={`icon ${list.class}`}></i>
              <div>{list.text}</div>
              <div className="amount">{list.amount}</div>
            </div>
          </React.Fragment>
        )
      })
      }

    </section>

  );

};

export default SummaryWrap;