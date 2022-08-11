import React, { useState } from "react";

const NativeTabMenu = (props) => {

  const {nativeTabMenu} = props;
  const {setClick} = props;
  const {click} = props;

  const tab = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('nativeTabmenu').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('nativeTabmenu').children[i];
      if(list.id === id){
        list.classList.add('active');
        setClick(list.innerHTML);
        console.log(click);
      } else {
        list.classList.remove('active');
      }
    }
    
  }

  return(

    <ul id="nativeTabmenu" className="nativeTabmenu">
      {nativeTabMenu.map((data, index)=>{
        return(
        <React.Fragment key={index}>
          <li id={data.text} className={data.className} onClick={tab}>{data.text}</li>
        </React.Fragment>
        )
      })
      }
      
    </ul>

  );

};

export default NativeTabMenu;