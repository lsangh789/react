import React, {useState, useRef} from "react";
import {Tabmenu} from "../tabmenu/TabmenuComponent";

import "../../../css/input copy.css";

export const Input1 = (props) => {

  const { children, inputTitle, outButton } = props;

  const name = useRef();  

  const onfu = () => {
    name.current.classList.add('focus');
    // setPopName("slideUp");
    // setPopUp(true);
  }

  const onbl = () => {
    name.current.classList.remove('focus');
    // setPopName("slideDown");
    // //시간경과시 액션
    // setTimeout(() => { setPopUp(false); }, 500);
  }
  
  return (
    <>
      <div className="inputWrap">
        {inputTitle && <div className="title">{inputTitle}</div>}
        <label ref={name} onFocus={onfu} onBlur={onbl} className="inputBox">
          {children}
        </label>
        {outButton && <button className="submitBtn">{outButton}</button>}
      </div>

    </>   
    
  );

};

export const Input2 = (props) => {

  const { children, inputTitle, outButton } = props;

  // 12
  const [btnName, setBtnName] = useState("삭제");
  const inputBtn = useRef();
  const name = useRef();

  const onfu = () => {
    name.current.classList.add('focus');
    inputBtn.current.classList.remove("delete");
    setBtnName("저장");
  }

  const onbl = () => {
    name.current.classList.remove('focus');
    inputBtn.current.classList.add("delete");
    setBtnName("삭제");
  }

  return (
    <>
      <div className="inputWrap">
        {inputTitle && <div className="title">{inputTitle}</div>}
        <label ref={name} onFocus={onfu} onBlur={onbl} className="inputBox">
          {children}
        </label>
        {outButton && <button ref={inputBtn} className="submitBtn delete">{btnName}</button>}
      </div>
    </>   
    
  );

};

export const Textarea1 = (props) => {

  const { children, inputTitle, outButton } = props;

  const name = useRef();

  const onfu = () => {
    name.current.classList.add('focus');
  }

  const onbl = () => {
    name.current.classList.remove('focus');
  }

  return(
    <>
      <div className="inputWrap">
        {inputTitle && <div className="title">{inputTitle}</div>}
        <label ref={name} onFocus={onfu} onBlur={onbl} className="textareaBox">
          {children}
        </label>
        {outButton && <button className="submitBtn">{outButton}</button>}
      </div>
    </>   
  );

};

export const Message = (props) => {

  const { children } = props;

  return(
    <>
    
    <div className="message">
      <div>
        {children}
      </div>
    </div>
N
    </>
  );

};

const InputComponent = () => {

  // 문의 유형-2
  const select = ["회원정보", "방송", "청취", "결제", "장애/버그"];
  const [btnlistClick, setBtnlistClick] = useState('문의 유형을 선택해주세요.');
  const [btn, setBtn] = useState(false);

  // 문의 유형-2
  const btnClick = () => {
    setBtn(true);
    if(btn === true){
      setBtn(false);
    }
  }

  // 현금영수증-5
  const moneyTab = ["신청안함", "소득공제용", "지출증빙용"];
  const [moneyTabs, setMoneyTabs] = useState(moneyTab[0]);
  
  // -9
  const [notTexts, setNotTexts] = useState(false);
  const [cnts, setCnts] = useState(0);

  const handleOnInput = (e) => {
    const targetValue = e.target.value.length;
    if (targetValue <= e.target.maxLength) {
      setCnts(targetValue);
      setNotTexts(true);
    }
    if (targetValue === 0) setNotTexts(false);
  }

  // -11
  const [notTextarea, setNotTextarea] = useState(false);
  const [textareaCnts, settextareaCnts] = useState(0);

  const handleOnTextarea = (e) => {
    const targetValue = e.target.value.length;
    if (targetValue <= e.target.maxLength) {
      settextareaCnts(targetValue);
      setNotTextarea(true);
    }
    if (targetValue === 0) setNotTextarea(false);
    
  }

  // -10
  const filter = ["전체", "닉네임", "ID"];
  const [filterValue, setFilterValue] = useState(filter[0]);
  const [btnfilterClick, setBtnfilterClick] = useState('전체');
  const [arrow, setArrow] = useState("arrowDown");
  const [filters, setFilters] = useState(false);

  const filterClick = () => {
    setFilters(true);
    setArrow('arrowUp')
    if(filters === true){
      setFilters(false);
      setArrow('arrowDown');  
    }
  }

  // -14 
  const scClick = (checked) => {
    console.log(checked);
    if(checked){
      console.log("true");
      <Message>
        팬배지 시작
      </Message>
    }else {
      console.log("false");
      <Message>
        팬배지 끝
      </Message>
    }

  }

  // -16
  const [popUp, setPopUp] = useState(false);
  const [popName, setPopName] = useState("slideDown");

  const pop = useRef();  

  const onfu = () => {
    setPopName("slideUp");
    setPopUp(true);
  }

  const onbl = () => {
    setPopName("slideDown");
    //시간경과시 액션
    setTimeout(() => { setPopUp(false); }, 500);
  }

  return(
    <>

    <div className="inquireWrite">
      <Input1 inputTitle="문의 제목" >
        <input placeholder="문의 제목을 입력해주세요." />
      </Input1>
    </div>

    <div className="inquireWrite">
      <Input1 inputTitle="문의 유형" >
        <button onClick={btnClick} >{btnlistClick}</button>
        {btn && 
          <div className='selectWrap'>
            {select.map((data, index)=>{
                const btnlist = (e) => {
                  const {targetTab} = e.currentTarget.dataset;
                  if(data === targetTab){
                    setBtnlistClick(data);
                  } 
                  else console.log('no')
                }
              return(
                <div onClick={e => {btnlist(e)}} className='option' data-target-tab={data} key={index}>
                  {data}
                </div>
              )
            })}
          </div> 
        }
      </Input1>
    </div>  

    <div className="inquireWrite">
      <Input1 inputTitle="문의 내용" >
        <textarea rows="10" placeholder="아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다. 

OS (ex-Window 버전10) : 
브라우저 : 
문제발생 일시 : 
문의내용 : " defaultValue="아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다. 

OS (ex-Window 버전10) : 
브라우저 : 
문제발생 일시 : 
문의내용 : ">

        </textarea>
      </Input1>
    </div>  

    <Input1 inputTitle="입금 정보">
      <p>
        1,100,000원
        <span>
          (부가세포함)
        </span>
      </p>
    </Input1>


    <div className="inquireWrite">
      <div className="tabmenuWrap">
        <div className="title">현금영수증</div>
        {/* <Tabmenu text={moneyTab} className="tabmenu"/> */}
        <ul className="tabmenu">
          {moneyTab.map((data, index)=>{
            const tabOn = (e) => {
              const {targetTab} = e.currentTarget.dataset;
              if (targetTab === data) setMoneyTabs(data)
              else console.log('no')
            }
            return(
              <li onClick={e=>{tabOn(e)}} className={`${moneyTabs === data ? 'active' : ''}`} data-target-tab={data} key={index}>{data}</li>
            )
          })}
        </ul>
        {moneyTabs === "소득공제용" && 
          <Input1>
            <input placeholder="주민번호 또는 휴데폰번호를 입력해주세요." />
          </Input1>
        }
        {moneyTabs === "지출증빙용" && 
          <Input1>
            <input placeholder="사업자번호를 입력해주세요." />
          </Input1>
        }
        {/* <ul className={className}>
          {text.map((data,index) => {
            const liveOn = (e) => {
              const {targetTab} = e.currentTarget.dataset;
              if (targetTab === data) setMoneyTabs(data)
              else console.log('no')
            }
            return (
              <li onClick={e=>liveOn(e)} className={`${moneyTabs === data ? 'active' : ''}`} data-target-tab={data} key={index}>
                {data}
              </li>
            )
          })}
          {bg && <div className="wrapboxBg"></div>}
          <div className="underline"></div>
        </ul>   
        <div className="cashReceipt">
        {moneyTabs === "소득공제용" && 
          <Input1>
            <input placeholder="주민번호 또는 휴데폰번호를 입력해주세요." />
          </Input1>
        }
        {moneyTabs === "지출증빙용" && 
          <Input1>
            <input placeholder="사업자번호를 입력해주세요." />
          </Input1>
        } */}
      </div>
    </div>

    <div className="inquireWrite">
      <div className="phone">
        <Input1 outButton="인증요청"> 
          <input type="number" placeholder="휴대폰 번호" />
        </Input1>
      </div>
    </div>

    <div className="search">
      <Input1>
        <input placeholder="닉네임, 방송, 클립을 입력해주세요." />
      </Input1>
    </div>
    
    <div className="search2">
      <Input1>
        <input className="leftSearch" placeholder="궁금한 내용을 검색해보세요." />
      </Input1>
    </div>
    
    <div className="textareaInput">
      <Input1 inputTitle="최대 3개까지 저장 가능" >
        <input data-target-tab="textareaInput" maxLength={20} onChange={handleOnInput}  placeholder="더 이상 추가하실 수 없습니다." />
        <div className="textCount">
          <span>{cnts}</span>
          <span>/20</span>
        </div> 
      </Input1>
      <div className="btnSection">
        <div className="rightBtn">
          <button className={`submitBtn ${notTexts === true ? "active" : ""}`}>등록</button>
        </div>
      </div>
    </div>

    <div className="blockInput">
      <Input1>
        <div className='filterBtn' onClick={filterClick}>{btnfilterClick}
          <span className={arrow}></span>
          {filters && 
            <ul className='option' >
            {filter.map((data, index)=>{
              const btnlist1 = (e) => {
                const {targetTab} = e.currentTarget.dataset;
                if(data === targetTab){ 
                  setFilters(false);
                  setArrow('arrowDown');   
                  setBtnfilterClick(data); 
                  setFilterValue(data);
                }else console.log('no')
              }
              return(
                <li onClick={btnlist1} className={data === filterValue ? "checked" : ""} data-target-tab={data} key={index}>{data}</li>
              )
              
            })}
            </ul>
          }
        </div>
        <input placeholder="검색어를 입력해보세요" />
      </Input1>
    </div>

    <div className="broadcastTextarea">
      <Textarea1 inputTitle="최대 1개까지 저장 가능">
        <textarea data-target-tab="textareaInput" defaultValue="쉿~!! 조용히 들어보세요..
 그리고 가만히 눈감고 쉬었다가세요." maxLength={1000} onChange={handleOnTextarea}>
        </textarea>
        <div className="textCount">
          <span>{textareaCnts}</span>
          <span>/1000</span>
        </div>
      </Textarea1>
      <div className="btnSection">
        <div className="leftBtn">
          <button className="deleteBtn">삭제</button>
        </div>
        <div className="rightBtn">
          <button className="deleteBtn">취소</button>
          <button className={`submitBtn ${notTextarea === true ? "active" : ""}`}>수정</button>
        </div>
      </div>
    </div>

    <div className="prohibitionInput">
      <Input2 outButton="사용">
        <input type="text" defaultValue="1818" />
      </Input2>
      <Input2 outButton="사용">
        <input  type="text" defaultValue="썅" />
      </Input2>
    </div>

    <div className="qiuckInput">
      <div className="listHead">
        <div className="titleWrap">
          <span className="listIndex">1</span>
          <span className="listTitle">퀵 메시지</span>
        </div>
        <button className="saveBtn">저장</button>
      </div>
      <Input1>
        <div className="category">명령어</div>
        <input type="text" defaultValue="인사" />
      </Input1>
      <Input1>
        <div className="category">내용</div>
        <input type="text" defaultValue="안뇽하세요. 반갑습니다." />
      </Input1>
    </div>

    <div className="checkInput">
      <Input1 inputTitle="배지 설정">
        <span className="spanTitle">실시간 팬 배지</span>
        <label className="inputLabel">
          <input type="checkbox" className="blind" 
          onChange={e => {
            scClick(e.currentTarget.checked, 'check');
          }} />
          
          <span className="switchBtn"></span>
        </label>
      </Input1>
    </div>

    <div className="radioInput">
      <Input1>
        <div className="titleWrap">
          <span className="title">새콤달콤상큼이 커~몬~~~~</span>
        </div>
        <div className="radioBox">
          <input type="radio" className="blind"></input>
          <span className="radioBtn"></span>
        </div>
      </Input1>
    </div>

    <div className="reportInput">
      <Input1 outButton="조회">
        <input ref={pop} onFocus={onfu} onBlur={onbl} type="button" defaultValue="2022-05-31 ~ 2022-06-07" />
      </Input1>
      {popUp &&
        <div className="pop">
          <div className={`slideLayer ${popName === "slideUp" ? "slideUp" : "slideDown"}`}>
            <h3>기간 설정</h3>
          </div>
        </div>
      }
    </div>

    </>
  );

};

export default InputComponent;