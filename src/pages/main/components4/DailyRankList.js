import React from "react";

import CntTitle from "../components2/CntTitle";
import Tabmenu from "./Tabmenu";


import '../css/section.css';

const DailyRankList = (props) => {

  const {ClipHeader} = props;
  const {dailyList} = props;

  return (

    <section className="dailyRankList">
      <CntTitle ClipHeader={ClipHeader} />
      <Tabmenu dailyList={dailyList} />
    </section>

  );

};

export default DailyRankList;