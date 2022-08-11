import React from "react";

import '../css/rankBox.css';

const RankBox = (props) => {

  const {myRankingList} = props;

  return(
    <>
      <ul className="rankBox">
        {myRankingList.map((data, index)=>{
          return(
            
              <li key={index}>
                <p className="rankCategory">{data.title}</p>
                <p className="rankData">{data.rank === '' ? '-' : data.rank}</p>
                <p className="rankDaily">{data.day}</p>
              </li>
            
          )

        })
        }
      </ul>
    </>

  );

};

export default RankBox;