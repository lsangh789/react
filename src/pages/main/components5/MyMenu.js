import React,{useState, useEffect} from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import '../css/myMenu.css';

const MyMenu = (props) => {

  const {myMenu} = props;

  const history = useHistory();

  const [click, setClick] = useState('/');

  const onClikeGnb = (e) => {
    
    const {link}= e.currentTarget.dataset;
  
    console.log(link);
  
    history.push(link);
    setClick(link);
  }

  return(

    <div className="myMenu" >
      {myMenu.map((data, index)=>{
        return(
          <React.Fragment key={index} >
            <div className="myMenuList" data-link={data.id} onClick={onClikeGnb}>
              <div className={`icon ` + data.id}>
                {data.id === 'team' ? <div className="empty"></div> : ''}
              </div>
              <p className="name">{data.title}</p>
            </div>
          </React.Fragment>
        )
      })
      }

    </div>
  );

};

export default MyMenu;