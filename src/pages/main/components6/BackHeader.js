import React from "react";

import '../css/backHeader.css';

const BackHeader = (props) => {

  const {Header} = props;

  return(
    <>

      {Header.map((data, index)=>{
        return(
          <header className="back sticky" key={index}>
            <button className={`back ${data.back === 'no' ? 'active' : ''}`}></button>
            <h1 className="title">{data.title}</h1>
            <div className="buttonGroup">
              {data.type === 'btnImage' ? 
                <button className={`btnMassageAdd ${data.img === '' ? 'active' : '' }`}>
                  <img src={data.img}></img>
                </button>
                :
                data.type === 'edit' ?
                <button className="editBtn">{data.text}</button>
                :
                data.type === 'benefits' ?
                <button className="benefits">{data.text}</button>
                :
                ''
              }

              
            </div>
         </header>
        )
      })
      }

    </>
  );

};

export default BackHeader;