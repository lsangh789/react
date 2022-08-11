import React from "react";
import BackHeader from "../components6/BackHeader";
import ChatListPage from "../components6/ChatListPage";

import "../css/mailbox.css";

const DarMailbox = () => {

  const backHeader = [
    {
      title: '메시지',
      img: 'https://image.dalbitlive.com/mailbox/ico_user_b.svg',
      back: 'yes',
      type: 'btnImage',
    },
  ]
  
  const chatName = [
    {
      chat:'메시지 기능 사용 설정',
      onOff: 'off',
      
    }
  ]
  
  const chatList = [
    {
      img: 'https://photo.dalbitlive.com/profile_0/20910193200/20201221085449574450.png?292x292',
      infoNick: '🎼스파~이더🕷 :||',
      infoMessage: '사진을 보냈습니다.',
      time: '04월 14일',
    },
  ]

  return(

    <div id="mailBoxPage">
      <BackHeader Header={backHeader} />
      <ChatListPage chatName={chatName} chatList={chatList} />

    </div>

  );

};

export default DarMailbox;