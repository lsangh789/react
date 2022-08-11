import React,{useState, useEffect} from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import '../css/myInfo.css';

const MyInfo = (props) => {

  const {myInfo} = props;

  const history = useHistory();

  const [click, setClick] = useState('/');

  const onClikeGnb = (e) => {
    
    const {link}= e.currentTarget.dataset;
  
    console.log(link);
  
    history.push(link);
    setClick(link);
  }

  return(

    <>
      {myInfo.map((data, index)=>{
        return(
          <div className="myInfo" key={index}>
            <div className="textWrap" >
              <div className="text">
                <span>
                  <strong>{data.name}</strong>
                  님
                </span>
                <span>{data.text}</span>
              </div>
              <div className="info">
                <em className="level">
                  Lv {data.level}
                </em>
                <span className="userId">{data.userId}</span>
              </div>
              <div className="count">
                <div data-target-type='fan'>
                  <i>팬</i>
                  <span>{data.fan}</span>
                </div>
                <div data-target-type='star'>
                  <i>스타</i>
                  <span>{data.star}</span>
                </div>
                <div data-target-type='like'>
                  <i>좋아요</i>
                  <span>{data.like}</span>
                </div>
              </div>
            </div>
            <div className="photoWrap">
              <div className="photo">
                <img src="https://photo.dalbitlive.com/profile_0/21020360400/20210329222424345059.png?292x292" />
              </div>
              <button data-link="myProfile" onClick={onClikeGnb}>프로필 보기</button>
            </div>
          </div>
        )
      })
      }
    </>
    

  );

};

export default MyInfo;