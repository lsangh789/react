import React from "react";

const TopTenDF = (props) => {

  const {teamTab} = props;
  const {id, img, nickNm, index} = teamTab;

  return (

    <div className="listColumn" key={index}>
      <div className="photo">
        <img src={img} />
        <div className="rank" style={{background: `url('https://image.dalbitlive.com/main/dalla/number_W-${id}.png') `}}></div>
      </div>
      <p>{nickNm}</p>
    </div>

  );

};

export default TopTenDF;