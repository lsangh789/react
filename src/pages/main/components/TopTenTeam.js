import React from "react";

const TopTenTeam = (props) => {

  const {data} = props;
  const {id, imgBG, imgAround, imgIn, rank, nickNm, index} = data;

  return (
    <>
    {data.map((v,idx) => {
      <div className="listColumn" key={idx}>
        <div className="teamSymbol">
          <img src={v.imgBG} />
          <img src={v.imgAround} />
          <img src={v.imgIn} />
          <div className="rank" style={{background: `url('https://image.dalbitlive.com/main/dalla/number_W-${v.id}.png')`}}></div>
        </div>
        <p>{v.nickNm}</p>
      </div>
    })}
    
    </>
  );

};

export default TopTenTeam;