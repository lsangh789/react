import React from "react";

import '../css/optionWrap.css';

const OptionWrap = () => {
  return(

    <section className="optionWrap">
      <div className="selectBox">
        <button>
        전체
          <i className="arrowDownIcon"></i>
        </button>
      </div>
      <div className="sub">최근 6개월 이내</div>
    </section>


  );
};

export default OptionWrap;