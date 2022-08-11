import React from "react";

const PopSlide = (props) => {

  const {chart} = props;
  const {num} = props;
  const {chartUp} = props;

  return(

    <div id="popSlide" className="popSlide active">
      <div className="slideLayer slideUp">
        <div className="selectWrap" id="select">
          {chart.map((data, index) => {
            return(
              <div id={index} className={`selectOption ${num === (index+1) ? 'active' : ''}`}
              onClick={chartUp} key={index}>
                {data}
              </div>
            )
          })
          }
        </div>
      </div>
    </div>

  )

}

export default PopSlide;