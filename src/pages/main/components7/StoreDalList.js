import React from "react";

import '../css/storeDalList.css';

const StoreDalList = (props) => {

  const {storeDalList} = props;

  return(

    <section className="storeDalList">
      {storeDalList.map((data, index)=>{
        return(
          
            <div className="item" key={index}>
              <div className="icon">
                <img src={data.img} />
              </div>
              <div className="dal">{data.dal}</div>
              <div className={`bonus ${data.bonus === '' ? 'active' : ''}`}>{data.bonus}</div>
              <div className="price">{data.price}</div>
            </div>
              
        )
      })
      }

  </section>  


  );

};

export default StoreDalList;