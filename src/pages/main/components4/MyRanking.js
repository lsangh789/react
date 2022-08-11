import React from "react";

import MyCnt from "./MyCnt";
import RankBox from "./RankBox";

import '../css/myRanking.css';

const MyRanking = (props) => {

  const {cntTitleMini} = props;
  const {myRankingList} = props;

  return(

    <section className="myRanking">
      <MyCnt cntTitleMini={cntTitleMini} />
      <RankBox myRankingList={myRankingList} />
    </section>

  );

};

export default MyRanking;