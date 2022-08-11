import React from "react";

import TabMenu from "./TabMenu";
import Post from "./Post";

import '../css/tabMenu.css';
import '../css/noticePost.css';

const NoticeWrap = (props) => {

  const {tabMenu} = props;

  return(
    <div id="notice">
      <section className="noticeWrap">
        <TabMenu tabMenu={tabMenu} />
      </section>
    </div>
  );

};

export default NoticeWrap;