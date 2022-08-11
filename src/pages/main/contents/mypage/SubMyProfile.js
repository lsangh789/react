import React from "react";

import BackHeader from "../../components6/BackHeader";
import ProfileSwiper from "../../components5/ProfileSwiper";
import ProfileCard from "../../components5/ProfileCard";
import ProfileInfo from "../../components5/ProfileInfo";
import SocialWrap from "../../components5/SocialWrap";

import '../../css/myprofile.css';

const SubMyProfile = () => {

  const myprofileBackHeader = [
    {
      title: '메롱~😝마카롱**🍡💝',
      back: 'yes',
      type: 'edit',
      text: '편집',
    }
  ]

  const profileList = [
    {
      img: "https://photo.dalbitlive.com/profile_0/21020360400/20210329222424345059.png?500x500",
      url: "https://image.dalbitlive.com/level/frame/200923/AAA/ico_frame_19.png",
      lv: 19,
      gender: 'g',
      nick: '메롱~😝마카롱**🍡💝',
      id: 'zix9jvsd',
      fan: 9,
      star: 7,
      like: 13,
      comment: '마카롱에 달달한 커피...',
      liveSwiper: [
        {
          badge: 'Notice',
          text: "여러분들은 봄이 오면 뭐할꺼예요? 여행가고 싶다~!!",
          like: 0,
          cmt: 1,
          time: '2021-02-18',
          img: 'https://image.dalbitlive.com/profile/bookmark-on.png'
        },
        {
          badge: 'Notice',
          text: 'avpavnpdnvdpsv',
          like: 0,
          cmt: 0,
          time: '2022-05-13',
          img: 'https://image.dalbitlive.com/profile/bookmark-off.png'
        },
        {
          badge: 'Notice',
          text: 'ㅎㅇㅎㅇ',
          like: 0,
          cmt: 0,
          time: '2022-03-02',
          img: 'https://image.dalbitlive.com/profile/bookmark-off.png'
        },
        {
          badge: 'Notice',
          text: 'ㅎㅇ',
          like: 120,
          cmt: 100,
          time: '2022-03-03',
          img: 'https://image.dalbitlive.com/profile/bookmark-off.png'
        }
      ]
  
    }
  ]
  
  const rankInfo = [
    {
      type:'group',
      titleImg: 'https://image.dalbitlive.com/profile/infoTitle-top3.png',
      groupImg: [
        {
          img: 'https://image.dalbitlive.com/common/photoNone-bgGray.png',
        },
        {
          img: 'https://image.dalbitlive.com/common/photoNone-bgGray.png',
        },
        {
          img: 'https://image.dalbitlive.com/common/photoNone-bgGray.png',
        },
      ]
    }
  ]

  const ranInfoImg = [
    {
      type:'img',
      titleImg: 'https://image.dalbitlive.com/profile/infoTitle-cupid.png',
      img: 'https://photo.dalbitlive.com/profile_0/20910193200/20201221085449574450.png?62x62'
    }
  ]

  const social = [
    {
      type: 'pid',
      list: [
        { 
          img: 'https://photo.dalbitlive.com/profile_0/21020360400/20210329222424345059.png?292x292',
          nick: '메롱~😝마카롱**🍡💝',
          time: '2021-10-29',
          text: '안녕하세요~',
          like: 54,
          cmt: 1,
        },
        { 
          img: 'https://photo.dalbitlive.com/profile_0/21020360400/20210329222424345059.png?292x292',
          nick: '메롱~😝마카롱2',
          time: '2021-10-31',
          text: '안녕하세요~2',
          like: 150,
          cmt: 4,
        },
      ]
    },
    {
      type: 'fanboard',
      list: [
        {
          img: 'https://photo.dalbitlive.com/profile_0/21020360400/20210329222424345059.png?292x292',
          nick: '메롱~😝마카롱**🍡💝',
          time: '2021-10-29',
          text: '안녕하세요~',
          like: '',
          cmt: 1,
        },
        {
          img: 'https://photo.dalbitlive.com/profile_0/21000142800/20210311215422210159.png?292x292',
          nick: '오룡',
          time: '2021-02-04',
          text: '안녕하세요ㅠㅠ',
          like: '',
          cmt: 0,
        },
      ]
    }
  ]
  
  
  const clip = [
    {
      img: 'https://photo.dalbitlive.com/clip_0/20802412800/20200916162439278005.jpeg?500x500',
      like: '12',
      cmt: 1,
      title: '물고기 뽀꾸뮈 >(  •)>'
    }
  ]

  return(

    <div id="myprofile">
      <BackHeader Header={myprofileBackHeader} />
      <ProfileSwiper profileList={profileList} /> 
      <ProfileCard profileList={profileList} />
      <ProfileInfo rankInfo={rankInfo} ranInfoImg={ranInfoImg} profileList={profileList} />
      <SocialWrap social={social} clip={clip} />
    </div>

  );

};

export default SubMyProfile;