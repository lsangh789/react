import React, {useState, useRef} from "react";

import "../../../css/input.css";

const quick = [
  {
    title: "퀵 메시지",
    command: "인사",
    contents: "안뇽하세요. 반갑습니다."
  },
  {
    title: "퀵 메시지",
    command: "박수",
    contents: "우어~~~멋지네요.!!!"
  },
]

export const Input1 = (props) => {

  const { children, mixinTitle, inputName, inputTitle, className, outButton, subType, filterType, outClass, pop } = props;

  const [popUp, setPopUp] = useState(false);
  const [popName, setPopName] = useState("slideDown");
  const name = useRef();

  const onfu = () => {
    name.current.classList.add('focus');
    setPopName("slideUp");
    setPopUp(true);
  }

  const onbl = () => {
    name.current.classList.remove('focus');
    setPopName("slideDown");
    //시간경과시 액션
    setTimeout(() => { setPopUp(false); }, 500);
  }

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

  return (
    <>
      <div className="inputWrap">
        {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
        {inputName && <div className={inputName}>{inputTitle}</div>}
        <label ref={name} onFocus={onfu} onBlur={onbl} className={className}>
          {filterType === "filterBtn" && 
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
          </div>}
          {children}
          {subType &&
            <button className="searchBtn"></button>
          }
        </label>
        {outButton && <button className={outClass}>{outButton}</button>}
      </div>
      {pop &&
        popUp &&
          <div className={pop}>
            <div className={`slideLayer ${popName === "slideUp" ? "slideUp" : "slideDown"}`}>
              <h3>기간 설정</h3>
            </div>
          </div>
      }
    </>   
    
  );

};

export const Input2 = (props) => {

  const { mixinTitle, inputName, inputTitle, className, btnSection, rightBtn, maxLength } = props;

  const name = useRef();

  // InputStyle-9
  const [notTexts, setNotTexts] = useState(false);
  const [cnts, setCnts] = useState(0);
  const handleOnInput = (e) => {
    const targetValue = e.target.value.length;
    if (targetValue <= maxLength) {
      setCnts(targetValue);
      setNotTexts(true);
    }
    if (targetValue === 0) setNotTexts(false);
  }

  const onfu = (e) => {
    // const {targetTab} = e.currentTarget.dataset;
    
    // console.log(name, name.current, name.target, targetTab);
    // console.log(name.current.classList);
    name.current.classList.add('focus');
  }

  const onbl = () => {
    name.current.classList.remove('focus');
  }

  return (
    <div className="inputWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      {inputName && <div className={inputName}>{inputTitle}</div>}
      <label ref={name} onFocus={onfu} onBlur={onbl} className={className}>
        <input type="text"  data-target-tab="inputBoxTextarea" maxLength={maxLength} onChange={handleOnInput}  placeholder="더 이상 추가하실 수 없습니다." />
        <div className="textCount">
          <span>{cnts}</span>
          <span>/20</span>
        </div>
      </label>
      {btnSection && 
        <div className="btnSection">
          {rightBtn && 
            <div className="rightBtn">
              <button className={`submitBtn ${notTexts === true ? "active" : ""}`}>{rightBtn}</button>
            </div>
          }
        </div>
      }
    </div>
  );

};

export const Input3 = (props) => {
  const { children, mixinTitle, inputName, inputTitle, className, button, listHead } = props;

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

  return(

    <div className="inputWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      {listHead && 
        <div className={listHead}>
          <div className="titleWrap">
            <span className="listIndex"></span>
            <span className="listTitle"></span>
          </div>
          <button className="saveBtn"></button>
        </div>
      }
      <div className={inputName}>{inputTitle}</div>
      <label ref={name} onFocus={onfu} onBlur={onbl} className={className}>
        {children}
      </label>
      {button && 
        <button ref={inputBtn} type="button" className="inputBtn delete" >{btnName}</button>
      }
    </div> 

  );

};

export const Input4 = (props) => {

  const { children, mixinTitle, listHead, index, title } = props;

  return(

    <div className="inputWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      {listHead && 
        <div className={listHead}>
          <div className="titleWrap">
            <span className="listIndex">{index}</span>
            <span className="listTitle">{title}</span>
          </div>
          <button className="saveBtn">저장</button>
        </div>
      }
      {children}
    </div>

  );

};

export const Input5 = (props) => {

  const { children, mixinTitle, inputName, inputTitle, className, sectionTitle, switchs, point } = props;

  // const [scs, setScs] = useState(false);

  const slide = useRef();

  const scClick = (checked) => {
    if(checked){
      // 새로 추가
      slide.current.innerHTML += '<div class="hvxnwj up"><div>실시간 팬배지(회장~팀장)가 공개됩니다.</div></div>';
      // 5초후 삭제
      setTimeout(()=>{ slide.current.innerText = '' }, 5000);
    }else {
      // 새로 추가
      slide.current.innerHTML += '<div class="hvxnwj up"><div>실시간 팬배지(회장~팀장)가 비공개됩니다.</div></div>';
      // 5초후 삭제
      setTimeout(()=>{ slide.current.innerText = '' }, 5000);
    }

  }

  return(
    <>

      <div ref={slide}>

      </div>
      <div  className="inputWrap">
        {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
        {inputName && <div className={inputName}>{inputTitle}</div>}
        {sectionTitle && 
          <div className="sectionTitle">{sectionTitle}
            {point &&
              <span className="point">{point}</span>
            }
          </div>
        }
        {className &&
          <div className={className}>
            <label className="radioList">
              {children}
            </label>
          </div>
        }
        {switchs &&
          <div className="switchList">
            <div className="titleWrap">
              <span className="title">{switchs}</span>
              <label className="inputLabel"  >
                <input type="checkbox" className="blind" 
                //체크박스
                onChange={e => {
                  scClick(e.currentTarget.checked, 'check');
                }} />
                <span className="switchBtn" >
                  
                </span>
              </label>
            </div>
          </div>
        }
      </div>
    </>
  );

};

export const SubInput = (props) => {

  const { command, contents } = props;

  const name = useRef();
  const name2 = useRef();

  const onfu = () => {
    name.current.classList.add('focus');
  }

  const onbl = () => {
    name.current.classList.remove('focus');
  }

  const onfu2 = () => {
    name2.current.classList.add('focus');
  }

  const onbl2 = () => {
    name2.current.classList.remove('focus');
  }

  return(
    <div className="listContent">
      <div className="listRow">
        <div className="category">명령어</div>
        <input ref={name} onFocus={onfu} onBlur={onbl} className="inputText" type="text" defaultValue={command}></input>
      </div>
      <div className="listRow">
        <div className="category">내용</div>
        <input ref={name2} onFocus={onfu2} onBlur={onbl2} className="inputText" type="text" defaultValue={contents}></input>
      </div>
    </div>
  );

};

export const Select = (props) => {

  const { mixinTitle, inputName, inputTitle, className } = props;

  const select1 = useRef();

  // InputStyle-2
  const select = ["회원정보", "방송", "청취", "결제", "장애/버그"];
  const [btnlistClick, setBtnlistClick] = useState('문의 유형을 선택해주세요.');
  const [btn, setBtn] = useState(false);

  // InputStyle-2
  const btnClick = () => {
    setBtn(true);
    if(btn === true){
      setBtn(false);
    }
  }

  const subOnfu = () => {
    select1.current.classList.add('focus');
  }

  const subOnbl = () => {
    select1.current.classList.remove('focus');
  }

  return (
    <div className="selectWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      <div className={inputName}>{inputTitle}</div>
      <div className={className} ref={select1}>
        <button  onClick={btnClick} onFocus={subOnfu} onBlur={subOnbl} data-target-tab="inputBox">{btnlistClick}</button>
        {btn && 
          <div className='selectWrap'>
            {select.map((data, index)=>{
                const btnlist = (e) => {
                  const {targetTab} = e.currentTarget.dataset;
                  if(data === targetTab){
                    setBtn(false);
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
      </div>
    </div>
  );
};

export const Select2 = (props) => {

  const { mixinTitle, inputName, inputTitle, className, subclassName, placeholder, placeholder2 } = props;

  // InputStyle-5
  const moneyTab = ["신청안함", "소득공제용", "지출증빙용"];
  const [moneyTabs, setMoneyTabs] = useState(moneyTab[0]);

  const select = useRef();

  const subOnfu = () => {
    select.current.classList.add('focus');
  }

  const subOnbl = () => {
    select.current.classList.remove('focus');
  }

  return(
    <div className="selectWrap2">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      <div className={inputName}>{inputTitle}</div>
      <div className={className}>
        <ul className='moneyTab'>
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
          <div className="cashRece">
            <div className='inputItem'>
              <label ref={select} onFocus={subOnfu} onBlur={subOnbl} className={subclassName}>
                <input type="text" placeholder={placeholder} data-target-tab={className} />
              </label>
            </div>
          </div> 
        }
        {moneyTabs === "지출증빙용" && 
          <div className="cashRece">
            <div className='inputItem'>
              <label ref={select} onFocus={subOnfu} onBlur={subOnbl} className={subclassName}>
                <input type="text" placeholder={placeholder2} data-target-tab={className} />
              </label>
            </div>
          </div>  
        }
      </div>
    </div>
  );

};

export const Textarea = (props) => {

  const { children, mixinTitle, inputName, inputTitle, className } = props;

  const textarea = useRef();

  const onfu = () => {
    textarea.current.classList.add('focus');
  }

  const onbl = () => {
    textarea.current.classList.remove('focus');
  }

  return (
    <div className="TextareaWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      <div className={inputName}>{inputTitle}</div>
      <label ref={textarea} onFocus={onfu} onBlur={onbl} className={className}>
        {children}
      </label>
    </div>
  )
}

export const Textarea2 = (props) => {

  const { mixinTitle, inputName, inputTitle, className, pTilte, btnSection, span, maxLength, rightBtn, leftBtn } = props;

  const textarea = useRef();

  const [notTexts, setNotTexts] = useState(false);
  const [cnts, setCnts] = useState(0);
  const handleOnInput = (e) => {
    const targetValue = e.target.value.length;
    if (targetValue <= maxLength) {
      setCnts(targetValue);
      setNotTexts(true);
    }
    if (targetValue === 0) setNotTexts(false);
  }

  const onfu = () => {
    textarea.current.classList.add('focus');
  }

  const onbl = () => {
    textarea.current.classList.remove('focus');
  }

  return (
    <div className="TextareaWrap">
      {mixinTitle && <div className="mixinTitle">{mixinTitle}</div>}
      {pTilte && <p className="topText">{pTilte}</p> }
      <div className={inputName}>{inputTitle}</div>
      <label ref={textarea} onFocus={onfu} onBlur={onbl} className={className}>
        <textarea onChange={handleOnInput} className='textareBox' rows="5" placeholder="내용을 입력해주세요.">

        </textarea>
        {span &&
          <div className="textCount">
            <span>{cnts}</span>
            <span>{span}</span>
          </div>
        }
      </label>
      {btnSection && 
        <div className="btnSection">
          {leftBtn &&
            <div className="leftBtn">
              <button className="deleteBtn">삭제</button>
            </div>
          }
          {rightBtn && 
            <div className="rightBtn">
              <button className="deleteBtn">취소</button>
              <button className={`submitBtn ${notTexts === true ? "active" : ""}`}>{rightBtn}</button>
            </div>
          }
        </div>
      }
    </div>
  )
}

const InputComponent = () => {

  return(
    <>
      <Input1 mixinTitle="InputStyle-1" inputName="inputTitle" className="inputBox" inputTitle="문의 제목">
        <input type="text" placeholder="문의 제목을 입력해주세요." />
      </Input1>
      
      <Select mixinTitle="InputStyle-2" inputName="inputTitle" className="inputBox" inputTitle="문의 유형">
      </Select >

      <Textarea mixinTitle="InputStyle-3" inputName="inputTitle" inputTitle="문의 내용" className="textareaBox" >
        <textarea className='textareBox' rows={10} data-target-textarea="textareaBox" placeholder="아래 내용을 함께 보내주시면 더욱 빠른 처리가 가능합니다. 

        OS (ex-Window 버전10) : 
        브라우저 : 
        문제발생 일시 : 
        문의내용 : "  >
        </textarea>
      </Textarea>
      
      <Input1 mixinTitle="InputStyle-4" inputName="inputTitle" className="inputBox" inputTitle="입금 정보">
        <p>
          1,100,000원
          <span> (부가세포함)</span>
        </p>
      </Input1>

      <Select2 mixinTitle="InputStyle-5" inputName="inputTitle2" className="inputBox" inputTitle="현금영수증" subclassName="inputBox" placeholder="주민번호 또는 휴대폰번호를 입력해주세요." placeholder2="사업자번호를 입력해주세요.">
      </Select2>

      <Input1 mixinTitle="InputStyle-6" inputName="inputTitle" className="inputBox" inputTitle="문의 내용" outClass="outButton" outButton="인증요청">
        <input type="number" placeholder="휴대폰 번호" />
      </Input1>

      <Input1 mixinTitle="InputStyle-7" inputName="inputTitle" className="inputBoxLeftBtn" >
        <input type="text" placeholder="닉네임, 방송, 클립을 입력해주세요." />
      </Input1>

      <Input1 mixinTitle="InputStyle-8" inputName="inputTitle" className="inputBoxRightBtn" >
        <input type="text" placeholder="궁금한 내용을 검색해보세요." />
      </Input1>

      <Input2 mixinTitle="InputStyle-9" inputName="inputTitle" className="inputBoxTextarea" btnSection="등록" rightBtn="등록" maxLength={20}>
      </Input2>

      <Input1 mixinTitle="InputStyle-10" inputName="inputTitle" className="inputBoxSearchBtn" subType="searchBtn" filterType="filterBtn">
        <input type="text" placeholder="검색어를 입력해 보세요" />
      </Input1>

      <Textarea2 mixinTitle="InputStyle-11" inputName="inputTitle" className="textareaBox2" pTilte="최대 1개까지 저장 가능" btnSection="btnSection" maxLength={1000} span="/1000" rightBtn="수정" leftBtn="leftBtn"></Textarea2>

      <Input3 mixinTitle="InputStyle-12" inputName="inputTitle" className="inputBox" button="button">
        <input type="text" defaultValue={1818}></input>
      </Input3>

      <Input3 mixinTitle="InputStyle-12" inputName="inputTitle" className="inputBox" button="button">
        <input type="text" defaultValue={9999}></input>
      </Input3>

      {quick.map((data, index)=>{
        return(
          <Input4 mixinTitle="InputStyle-13" listHead="listHead" inputName="inputTitle" className="inputBox" index={(index)+1} title={data.title} key={index}>
            <SubInput command={data.command} contents={data.contents} />
          </Input4>
        )
      })}

      <Input5 mixinTitle="InputStyle-14" inputName="inputTitle" sectionTitle="배지 설정" switchs="실시간 팬 배지" >
      </Input5>

      <Input5 mixinTitle="InputStyle-15" inputName="inputTitle" className="radioWrap" sectionTitle="등록된 제목" point={3} >
        <div className="titleWrap">
          <span className="title" >
            새콤달콤상콤이 커~모~~~온
          </span>
        </div>
        <div className="radioBox">
          <input type="radio" className="blind"></input>
          <span className="radioBtn"></span>
        </div>
      </Input5>

      <Input1 mixinTitle="InputStyle-16" inputName="inputTitle" className="inputBox" outClass="outButton2" outButton="인증요청" pop="pop">
        <input type="button" value="2022-05-27 ~ 2022-06-03" />
      </Input1>

      <div>-----------------------------------------------------------------------------</div>
      
    </>
  );

};

export default InputComponent;