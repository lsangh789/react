import React,{useState} from "react";

import ListWrap from "./ListWrap";

import '../css/tebmenu.css';

const Tabmenu = (props) => {

  const {dailyList} = props;

  const [live, setLive] = useState('FAN');

  const tab = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('tabmenu').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('tabmenu').children[i];
      if(list.id === id){
        list.classList.add('active');
        setLive(list.innerHTML);

      } else {
        list.classList.remove('active');
      }
    }
    
  }

  return(
    <>
      <ul id='tabmenu' className="tabmenu">
        <li id='fan' className="li active" onClick={tab}>FAN</li>
        <li id='cupid' className="li" onClick={tab}>CUPID</li>
        <div className="underline"></div>
      </ul>

      {dailyList.map((data, index)=>{
        
        return(
          <React.Fragment key={index}>
            {data.type === live ? 
            <ListWrap dailyList={data.datas}/>
            :
            ''}
          </React.Fragment>
        )
      })
      }
      
    </>
  );

};

export default Tabmenu;