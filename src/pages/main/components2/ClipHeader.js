import React from "react";

import SearchForm from "./SearchForm";

import '../css/clipHeader.css';

const ClipHeader = (props) => {

  const {Header} = props;

  return (
    
    <>
      {Header.map((data, idex)=>{
        return (

          <header className="sticky" key={idex}>
            <h1 className="title">
              {data.title}
            </h1>
            <div className={`buttonGroup ${data.button === 'yes' ? '' : 'active'}`}>
              <button className="benefits">{data.btnText}</button>
            </div>
            <div className={`search ${data.search === 'yes' ? '' : 'active'}`}>
              <SearchForm/>
            </div>
            
          </header>

        )
      })}

      
    
  </>
  );

};

export default ClipHeader;