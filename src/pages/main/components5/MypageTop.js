import React from "react";

import MyInfo from "./MyInfo";
import MydalDetail from "./MydalDetail";
import MyMenu from "./MyMenu";

const MypageTop = (props) => {

  const {myInfo} = props;
  const {myMenu} = props;

  return (

    <section className="myPageTop">
      
      <MyInfo myInfo={myInfo} />
      <MydalDetail myInfo={myInfo} />
      <MyMenu myMenu={myMenu} />
    </section>

  );

};

export default MypageTop;