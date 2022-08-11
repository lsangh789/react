import React from "react";
import BannerWrap from "../components/BannerWrap";
import ClipDrawer from "../components2/ClipDrawer";
import ClipHeader from "../components2/ClipHeader";
import ClipList from "../components2/ClipList";
import HotClip from "../components2/HotClip";
import LikeSubWrap from "../components2/LikeSubWrap";

const DarClip = () => {

  const clipBannerWrapList = [
    {
      id:1,
      img:'https://image.dalbitlive.com/banner/2022/ct_sn.png'
    },
    {
      id:2,
      img:'https://image.dalbitlive.com/banner/2022/ct0404_b.png'
    },
    {
      id:3,
      img:'https://image.dalbitlive.com/banner/question_banner.png'
    }
  ]
  
  const ClipHeaders = [
    {
      title: '클립',
      search: 'no'
    }
  ]

  return (

    <div id="clipPage">
      <ClipHeader Header={ClipHeaders} />
      <HotClip />
      <BannerWrap bannerWrapList={clipBannerWrapList} />
      <LikeSubWrap />
      <ClipDrawer />
      <ClipList />
    </div>

  );

};

export default DarClip;

