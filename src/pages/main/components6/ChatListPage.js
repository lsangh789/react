import React, {useState} from "react";

import '../css/chatListPage.css';

const ChatListPage = (props) => {

  const {chatName} = props;
  const {chatList} = props;

  const [onOff, setOnOff] = useState('off');

  const circleBtn = (e) => {

    const id = e.currentTarget.id;
    const list = document.getElementById(id);

    // {chatName.map((data, index)=>{

    //   if( onOff === 'off' ){
    //     list.classList.add('active');
    //     list.children[0].classList.add('active');
    //     setOnOff('on');
    //   }else {
    //     list.classList.remove('active');
    //     list.children[0].classList.remove('active');
    //     setOnOff('off');
    //   }

    // })
    // }

    if( onOff === 'off' ){
      list.classList.add('active');
      list.children[0].classList.add('active');
      setOnOff('on');
    }else {
      list.classList.remove('active');
      list.children[0].classList.remove('active');
      setOnOff('off');
    }



  }

  return(

    <div className="chatListPage">
      {chatName.map((data, index)=>{
        return (
          <div className="chatOnOffBox" key={index}>
            <p>{data.chat}</p>
            <div className={`jItSRe ${data.onOff === 'on' ? 'active' : ''}`} id="jItSRe" onClick={circleBtn}>
              <div className="circle"></div>
            </div>
          </div>
        )
      })
      }

      <ul>
        {chatList.map((data, index)=>{
          return(
            <li className="chatListItem" key={index} >
              <div className="thumb">
                <img src={data.img} />
              </div>
              <div className="info">
                <p className="infoNick">{data.infoNick}</p>
                <p className="infoMessage">{data.infoMessage}</p>
                <span className="time">{data.time}</span>
              </div>
            </li>
          )
        })
        }

      </ul>
    </div>

  );

};

export default ChatListPage;