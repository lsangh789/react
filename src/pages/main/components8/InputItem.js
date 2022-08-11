import React from "react"

import '../css/inputItem.css'

const InputItem = (props) => {

  const titleInputClicks = () => {
    document.getElementById('titleInput').classList.add('focus');
  }
  
  const titleInput = () => {
    document.getElementById('titleInput').classList.remove('focus');
  }

  const inputClicks = () => {
    document.getElementById('input').classList.add('focus');
  }

  const input = () => {
    document.getElementById('input').classList.remove('focus');
  }

  const textareaClicks = () => {
    document.getElementById('textarea').classList.add('focus');
  }

  const textarea = () => {
    document.getElementById('textarea').classList.remove('focus');
  }

  return(

    <>

      <div className="inputItem">
        <div className="title">문의 제목</div>
        <label id="titleInput" className="inputBox">
          <input onFocus={titleInputClicks} onBlur={titleInput} type='text' placeholder='문의 제목을 입력해주세요.' />
        </label>
      </div>
      <div className="inputItem">
        <div className="title">문의 유형</div>
        <label id="input" className="inputBox">
          <input onFocus={inputClicks} onBlur={input} type='text' placeholder='문의 유형을 선택해주세요.' />
        </label>
      </div>

      <div className="inputItem">
        <div className="title">문의 내용</div>
        <label className="textareaBox" id="textarea">
          <textarea rows="10" onFocus={textareaClicks} onBlur={textarea} name="contents" defaultValue="
        아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다. 
        .
        OS (ex-Window 버전10) : 
        브라우저 : 
        문제발생 일시 : 
        문의내용 :  ">
        
          </textarea>
        </label>
      </div>

      

    </>
  );

};

export default InputItem