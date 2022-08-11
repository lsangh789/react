import React from "react";

import BackHeader from "../components6/BackHeader";
import RankCategory from "./RankCategory";

import '../css/rankingList.css';

const RankingList = (props) => {

  const {Header} = props;

  return(

    <div id="rankingList">
      <BackHeader Header={Header} />
      <RankCategory />
      
    </div>

  );

};

export default RankingList;