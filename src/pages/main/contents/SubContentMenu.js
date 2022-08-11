import React,{useState, useEffect} from 'react';
import '../css/subContent.css';

const SubContentMenu = (props) => {
  const {data, activeIndex, setActiveIndex, items} = props
  const [clickedIdx, setClickedIdx] = useState(0);

  const handleClick = (idx) => {
    // const openEle = document.getElementsByClassName("answerArea")[0]
    // console.log(openEle.dataset);

    setActiveIndex(idx);
    // setClickedIdx(null);
  };

  return (            
      <div onClick={() => {handleClick(data.list)}} className='faqList' date-index={data.list}>
        <div className='questionArea'>
          <span className='qmark'>Q</span>
          <span className='question'>{data.question}</span>
          <span className={data.list === activeIndex ? 'arrow down' : 'arrow up'}></span>
        </div>
        <div className={data.list === activeIndex ? 'answerArea' : 'closed'}>
          <p className={data.list === activeIndex ? 'answerText' : 'close'}>
            {data.text}
          </p>
        </div>
      </div>
            
    
  )

}

export default SubContentMenu;