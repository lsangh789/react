import React from "react";

import CntTitle from "../components2/CntTitle";
import LiveSwiper from "./LiveSwiper";

import '../css/liveSection.css'

const LiveSection = (props) => {

  const {cntTitle} = props;
  const {hotLiveList} = props;

  return(

    <section className="liveSection">

      <CntTitle ClipHeader={cntTitle} />
      <LiveSwiper LiveSwipers={hotLiveList} />

    </section>

  );

};

export default LiveSection;