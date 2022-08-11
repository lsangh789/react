import React from "react";
import CntTitle from "../components2/CntTitle";

import '../css/djSection.css';

import DJSwiper from "./DJSwiper";

const DJSection = (props) => {

  const {cntTitle} = props;

  return (

    <section className="djSection">

      <CntTitle ClipHeader={cntTitle} />
      <DJSwiper />

    </section>
    

  );

};

export default DJSection;