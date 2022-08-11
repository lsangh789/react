import React from "react";

import '../css/discountInfo.css';

const DiscountInfo = (props) => {

  const {discountInfo} = props;

  return(

    <>
      {discountInfo.map((data, index)=>{
        return(
          <section className="discountInfo" key={index}>
            <div>
                {data.title}
              <span>{data.text}</span>
            </div>
          </section>
        )
      })
      }
    </>


  );

};

export default DiscountInfo;