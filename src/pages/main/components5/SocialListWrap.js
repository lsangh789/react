import React,{ useState } from "react";

const SocialListWrap = (props) => {

  const {social} = props;

  const [isMore, setIsMore] = useState('hidden');

  const isMoreClick = () => {
    
    if(isMore === 'hidden'){
      setIsMore('open');
    }else {
      setIsMore('hidden');
    }
  }

  return(

    <div className="socialListWrap">
      {social.map((data, index)=>{
        return(
          <div className="socialList" key={index}>
            <div className="listRow">
              <div className="photo">
                <img src={data.img} />
              </div>
              <div className="listContent">
                <div className="listItem">
                  <div className="nick">{data.nick}</div>
                </div>
                <div className="time">{data.time}</div>
              </div>
              <div className="listBack">
                <div id="moreBtn">
                  <img onClick={isMoreClick} className="moreIcon" src="https://image.dalbitlive.com/common/header/icoMore-b.png" />
                  <div className={`isMore ${isMore}`}>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="socialContent">
              <div className="socialTextWrap isMore">
                <div className="socialText">{data.text}</div>
              </div>
              <div className="info">
                <i className={`likeOff ${data.like === '' ? 'active' : ''}`}>{data.like}</i>
                <i className="cmt">{data.cmt}</i>
              </div>
            </div>
          </div>
        )
      })}

    </div>

  );

};

export default SocialListWrap;