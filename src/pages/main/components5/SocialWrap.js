import React,{useState, useEffect} from "react";

import SocialListWrap from "./SocialListWrap";

const SocialWrap = (props) => {

  const {social} = props;
  const {clip} = props;

  const [click, setClick] = useState('fan');
  const [float, setFloat] = useState('action');
  const [floatClick, setFloatClick] = useState('');

  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
  console.log(ScrollY);
  const [ScrollActive, setScrollActive] = useState(false); 
  function handleScroll() { 
      if(ScrollY > 200) {
          setScrollY(window.pageYOffset);
          setScrollActive(true);
          setFloat('action');
      } else {
          setScrollY(window.pageYOffset);
          setScrollActive(false);
          setFloat('disAction');
      }
  }
  useEffect(() => {
      function scrollListener() {  window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
      scrollListener(); // window 에서 스크롤을 감시
      return () => { window.removeEventListener("scroll", handleScroll); }; //  window 에서 스크롤을 감시를 종료
  });

  const tab = (e) => {

    const id = e.currentTarget.id;
    const tabLength = document.getElementById('tabmenus').children.length;

    for(let i = 0; i < tabLength; i++){
      const list = document.getElementById('tabmenus').children[i];
      if(list.id === id){
        list.classList.add('active');
        setClick(list.id);

      } else {
        list.classList.remove('active');
      }
    }
    
  }

  const floatClicks = () => {
    if(floatClick === ''){
      setFloatClick('on');
    }else {
      setFloatClick('');
    }
    
  }

  return(

    <section className="socialWrap">
      <ul className="tabmenus" id="tabmenus">
        <li id='pid' onClick={tab}>피드(1)</li>
        <li id='fan' onClick={tab} className="active">팬보드(2)</li>
        <li id='clip' onClick={tab}>클립(1)</li>
      </ul>

      {click === 'fan' ? 
        <div className="fanboardSection">
          <div className="writeWrap">
            <div className="fanboardWrite">
              <textarea rows='7' maxLength='1000' placeholder="내용을 입력해 주세요.">
              </textarea>
              <div className="writeBottom">
                <label className="inputLabel">
                  <input type="checkbox" className="blind" />
                  <span className="checkIcon"></span>
                  <p className="checkInfo">비공개</p>
                </label>
                <button className="btn">등록</button>
              </div>
            </div>
          </div>
          {social.map((data, index)=>{
            return(
              <React.Fragment key={index}>
                {data.type === 'fanboard' ?
                <SocialListWrap social={data.list} />
                :
                ''}
              </React.Fragment>
            )
          })}
        </div>
        :
       click === 'pid' ? 
       <>
       <div className="fanboardSection">
        {social.map((data, index)=>{
          return(
            <React.Fragment key={index}>
              {data.type === 'pid' ?
              <SocialListWrap social={data.list} />
              :
              ''}
            </React.Fragment>
          )
        })}
        </div>
        <button className={`floatBtn ${floatClick}`} onClick={floatClicks}>
          <div className="blackCurtain"></div>
          <div className={`floatWrap ${float}`}>
            <ul>
              <li>
                방송공지 쓰기
                <img src="https://image.dalbitlive.com/profile/floating-btn-2.png" />
              </li>
              <li>
                피드 쓰기
                <img src="https://image.dalbitlive.com/profile/floating-btn-1.png" />
              </li>
            </ul>
          </div>
        </button>
      </>
        :  
       click === 'clip' ?
       clip.map((data, index)=>{

        return(
          <div className="clipSection" key={index}>
            <div className="clipContent">
              <div className="listColumn">
                <div className="photo">
                  <img src={data.img} />
                </div>
                <div className="title">{data.title}</div>
                <div className="info">
                  <i className="dataCnt goodCnt">{data.like}</i>
                  <i className="dataCnt replyCnt">{data.cmt}</i>
                </div>
              </div>
            </div>
          </div>
        )

       })

       :
       ''
      }



    </section>

  );

};

export default SocialWrap;