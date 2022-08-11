import React, {useState} from "react";

import Post from "./Post";

const TabMenu = (props) => {

  const {tabMenu} = props;

  const [live, setTab] = useState('공지사항');

  const tab = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('tabMenu').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('tabMenu').children[i];
      const lists = document.getElementById('tabMenu').children[i].children[0];
      
      if(list.id === id){
        list.classList.add('active');
        setTab(lists.innerHTML);
        console.log(lists.innerHTML);
      } else {
        list.classList.remove('active');
      }
    }
    
  }

  return(

    <>
      <ul className="tabMenu" id="tabMenu" >
        {tabMenu.map((data, index)=>{
          return(
            <React.Fragment key={index}>
              <li className={`${data.new === 'yes' ? 'new' : ''} ${data.active === 'yes' ? 'active' : ''}`} 
              data-tab-target={data.target} onClick={tab} id={data.target}>
                <span>{data.target}</span>
              </li>
            </React.Fragment>
          )
        })
        }
      </ul>
      {tabMenu.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            {
              data.target === live ?
              <Post post={data.datas} />

              :
              ''
            }
          </React.Fragment>
          
        )
      })
      }
    </>

  );

};

export default TabMenu;