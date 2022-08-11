import React from "react";

import '../css/box.css';

const Box = (props) => {

  const {rankInfo} = props;

  return(

    <div className="box">
      {rankInfo.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            <div className="title">
              <img src={data.titleImg} />
            </div>
            {data.type === 'group' ? 
              <div className="photoGroup" >
                {data.groupImg.map((gImg, idx)=>{
                  return(
                    <div className="photo" key={idx}>
                      <img src={gImg.img} />
                    </div>    
                  )                      
                })}
              </div>    
              :

              data.type === 'img' ? 
              <div className="photo cursor">
                <div className="photo">
                  <img src={data.img} />
                </div>
              </div>

              :
              ''             
            }
            
          </React.Fragment>
        )
      })
      }

    </div>

  );

};

export default Box;