import React from "react";

import BackHeader from "../components6/BackHeader";
import ProfileSwiper from "./ProfileSwiper";
import ProfileCard from "./ProfileCard";
import ProfileInfo from "./ProfileInfo";
import SocialWrap from "./SocialWrap";

import '../css/myprofile.css';

const MyProfile = (props) => {

  const {Header} = props;
  const {profileList} = props;
  const {rankInfo} = props;
  const {ranInfoImg} = props;

  const {social} = props;
  const {clip} = props;

  return(

    <div id="myprofile">
      <BackHeader Header={Header} />
      <ProfileSwiper profileList={profileList} /> 
      <ProfileCard profileList={profileList} />
      <ProfileInfo rankInfo={rankInfo} ranInfoImg={ranInfoImg} profileList={profileList} />
      <SocialWrap social={social} clip={clip} />
    </div>

  );

};

export default MyProfile;