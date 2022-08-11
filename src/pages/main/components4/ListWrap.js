import React from "react";
import ListItem from "./ListItem";

import '../css/listWrap.css';

const ListWrap = (props) => {

  const {dailyList} = props;
  
  return(

    <div className="listWrap">
      
      {dailyList.map((data, index)=>{
        return(
          <div className="listRow" key={index}>
            <div className="photo">
              <img src={data.photo} />
            </div>
            <div className="rank">
              {data.rank}
            </div>
            <div className="listContent">
              <ListItem gender={data.gender} nick={data.nick}  />
              <ListItem starCnt={data.starCnt} listenPoint={data.listenPoint} cupid={data.cupid} djGoodPoint={data.djGoodPoint} />
            </div>
            <div className="listBack">
              {data.badge === 'listener' ? 
                <div className="badgeListener">
                  <span className="headset">
                    ♬
                  </span>
                  <span className="ListenerText">LIVE</span>
                </div> 
                :
                data.badge === 'live' ? 
                <div className="badgeLive">
                  <span className="equalizer">
                    ▧
                  </span>
                  <span className="liveText">LIVE</span>
                </div>
                :
                ''
              }

            </div>
          </div>
        )
        
      })
      }
      

    </div>

  );

};

export default ListWrap;