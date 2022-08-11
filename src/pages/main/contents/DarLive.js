import React from "react";
import BannerWrap from "../components/BannerWrap";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";
import LiveContents from "../components/LiveContents";
import MainTopSW from "../components/MainTopSW";
import TopTen from "../components/TopTen";

const DarLive = () => {

  const bannerWrapList = [
    {
      id:1,
      img:'https://image.dalbitlive.com/banner/2022/wp_5.1.png'
    },
    {
      id:2,
      img:'https://image.dalbitlive.com/banner/2022/roulette.png'
    },
    {
      id:3,
      img:'https://image.dalbitlive.com/banner/contentlab_banner.png'
    },
    {
      id:4,
      img:'https://image.dalbitlive.com/banner/2022/rcdj.png'
    }
  ]

  return (

    <div className="mainPage">
      <MainTopSW />
      <Favorites />
      <TopTen />
      <BannerWrap bannerWrapList={bannerWrapList} />
      <LiveContents />
      <Footer />
    </div>

  );

};

export default DarLive;

