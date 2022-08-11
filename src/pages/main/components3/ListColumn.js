import React from "react";

import '../css/listColumn.css'

const ListColumn = (props) => {
  const {children} = props;

  return (

    <div className="listColumn">
      <div className="photo">
        <img src={props.img} />
      </div>
      <div className="listItem">
        <em className={`gender ${props.gender === 'm' ? 'male' : 'female'}`}></em>
        <p className="nick">{props.nick}</p>
      </div>
      {children}
    </div>

  );
  
};

export default ListColumn;