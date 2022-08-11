import React, {useState} from "react";

import InputItem from "./InputItem";
import ImageUpload from "./ImageUpload";
import InquireLog from "./InquireLog";

import '../css/inquiry.css';

const Inquiry = (props) => {

  const inputData = [
    {
      complete: 'y',
      title: 'Test',
      date: '2020.08.31.19:59:09',
    },
    {
      complete: '',
      title: 'NoTest',
      date: '2020.06.26.06:55:25',
    },
  ]

  const [tabmenu, setTabmenu] = useState('문의하기');

  const activeClick = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('tabmenu').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('tabmenu').children[i];
      if(list.id === id){
        list.classList.add('active');
        setTabmenu(list.innerHTML);

      } else {
        list.classList.remove('active');
      }
    }

  }

  return (

    <div className="inquiry">
      <ul id='tabmenu' className="tabmenus">
        <li id='문의하기' className="active" onClick={activeClick} >문의하기</li>
        <li id='나의 문의내역' className="" onClick={activeClick} >나의 문의내역</li>
      </ul>
      {tabmenu === '문의하기' ?  
      <div id="inquireWrite">
        <InputItem />
        <ImageUpload />
        <label className="inputLabel">
          <input type="checkbox" className="blind" name="checkList" />
          <span className="checkIcon"></span>
          <p className="checkInfo">개인정보 수집 동의</p>
          <button className="policyBtn">자세히</button>
        </label>
        <button type="button" className="submitBtn">등록하기</button>
      </div>
       :
      <InquireLog inputData={inputData} />
      }

      
    </div>

  );

};

export default Inquiry;