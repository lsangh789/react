import React from "react";

const CurrentWrap = (props) => {

  const {data} = props;

  return(

    <section className="currentWrap">
      {data.map((list, index)=>{
        return(
          <div className="currentBox" key={index}>
            <div className="payCount">
              <i className={`${list.type === '달' ? 'iconDal' : 'iconStar'}`}></i>
              <span className="text">{list.text}</span>
              <span className="amount">
                {list.cnt} 개
              </span>
            </div>
            <button type="button" className="submitBtn">{list.btn}</button>
          </div>
        )

      })
      }
    </section>

  );

};

export default CurrentWrap;