import React from "react";

import '../css/listItem.css'

const ListItem = (props) => {

  return(

    <div className="listItem">

      <em className={`gender ${props.gender === 'g' ? 'female' : props.gender === 'm' ? 'male' : 'active'}`}>
      </em>
      {props.nick ? <span className="nick">{props.nick}</span> : '' }

      {props.starCnt ? <i className="dataCnt starCnt">{props.starCnt}</i> : '' }
      {props.listenPoint ? <i className="dataCnt listenPoint">{props.listenPoint}</i> : '' }

      {props.cupid ? <i className="cupid">{props.cupid}</i> : '' }
      {props.djGoodPoint ? <i className="dataCnt djGoodPoint">{props.djGoodPoint}</i> : '' }
      
    </div>

  );

};

export default ListItem;