import React from "react";
import BackHeader from "../components6/BackHeader";
import DiscountInfo from "../components7/DiscountInfo";
import MyhaveDal from "../components7/MyhaveDal";
import StoreDalList from "../components7/StoreDalList";

const DarStore = () => {

  const backHeader = [
    {
      title: '스토어',
      img: '',
      back: 'no',
    },
  ]
  
  const myhaveDal = [
    {
      title: '내가 보유한 달',
      dalCnt: '1234',
    },
  ]
  
  const discountInfo = [
    {
      title: '인앱구매와 비교해',
      text: '최대 18% 할인'
    }
  ]
  
  const storeDalList= [
    {
      img: 'https://image.dalbitlive.com/store/dalla/icoDal_9.png',
      dal: '10,000',
      bonus: '+500',
      price: '￦1,100,000',
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_3000.png',
      dal: '5,000',
      bonus: '',
      price: '￦550,000',
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_2000.png',
      dal: '3,000',
      bonus: '',
      price: '￦330,000'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_1000.png',
      dal: '1,000',
      bonus: '',
      price: '￦110,000'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_0500.png',
      dal: '500',
      bonus: '',
      price: '￦55,000'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_0300.png',
      dal: '300',
      bonus: '',
      price: '￦33,000'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_0100.png',
      dal: '100',
      bonus: '',
      price: '￦11,000'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_0050.png',
      dal: '50',
      bonus: '',
      price: '￦5,500'
    },
    {
      img: 'https://image.dalbitlive.com/store/charge/200612/charge_item_0010.png',
      dal: '10',
      bonus: '',
      price: '￦1,100'
    },
  ]

  return (

    <div id="storePage">

      <BackHeader Header={backHeader} />
      <MyhaveDal myhaveDal={myhaveDal} />
      <DiscountInfo discountInfo={discountInfo} />
      <StoreDalList storeDalList={storeDalList} />

    </div>

  );

};

export default DarStore;