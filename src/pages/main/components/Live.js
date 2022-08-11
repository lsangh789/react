import React from "react";

import '../css/liveContents.css'

const Live = (props) => {

  const {contents} = props;
  const {index, id, img, newdj, title, gender, nickNm, totalCnt, entryCbt, likeCnt, types} = contents;

  return (
    <div className="listRow" key={index}>
      <div className="photo">
        <img src={img} />
      </div>
      <div className="listContent">
        <div className="listItem">
          <em className={"badgeItem" + (newdj === "신입DJ" ? " newDj" : "")}></em>
        </div>
        <div className="listItem">
          <span className="title">{title}</span>
        </div>
        <div className="listItem">
          <em className={"gender" + (gender === "male" ? " male" : " female")}></em>
          <span className="nickNm">{nickNm}</span>
        </div>
        <div className="listItem">
          <span className="state">
            <i className="dataCnt totalCnt">{totalCnt}</i>
            <i className="dataCnt entryCnt">{entryCbt}</i>
            <i className="dataCnt likeCnt">{likeCnt}</i>
          </span>
        </div>
      </div>
    </div>
  )

}

export default Live;