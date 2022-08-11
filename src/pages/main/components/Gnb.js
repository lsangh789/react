import React,{useState, useEffect} from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import '../css/gnb.css';

const Gnb = () => {

  const history = useHistory();

  const [click, setClick] = useState('/');

  const onClikeGnb = (e) => {
    
    const {link}= e.currentTarget.dataset;
  
    console.log(link);
  
    history.push(link);
    setClick(link);
  }
  

  return (
    
    <aside id="GNB">
      <div className='gnbContainer'>
        <div className='gnHeader'>
          <h1>
            <img src='https://image.dalbitlive.com/common/header/LOGO.png' alt='logo'></img>
          </h1>
        </div>
        <nav className='gnbNavigation'>
          <ul>
            <li className={`cursorPointer ${click === '/' ? 'active' : ''}`} data-link="/" data-url="/" onClick={e => onClikeGnb(e)}></li>
            <li className={`cursorPointer ${click === 'clip' ? 'active' : ''}`} data-link="clip" data-url="clip" onClick={e => onClikeGnb(e)}></li>
            <li className={`cursorPointer ${click === 'search' ? 'active' : ''}`} data-link="search" data-url="search" onClick={e => onClikeGnb(e)}> </li>
            <li className={`cursorPointer ${click === 'rank' ? 'active' : ''}`} data-link="rank" data-url="rank" onClick={e => onClikeGnb(e)}> </li>
          </ul>
        </nav>
        <div className='subGnbNavigation'>
          <ul>
            <li className={`cursorPointer ${click === 'mypage' ? 'active' : ''}`} data-link="mypage" data-url="mypage" onClick={e => onClikeGnb(e)}></li>
            <li className={`cursorPointer ${click === 'mailbox' ? 'active' : ''}`} data-link="mailbox" data-url="mailbox" onClick={e => onClikeGnb(e)}></li>
            <li className={`cursorPointer ${click === 'store' ? 'active' : ''}`} data-link="store" data-url="store" onClick={e => onClikeGnb(e)}>
              <span className='saleStore'>SALE</span>
            </li>
            <li className={`cursorPointer ${click === 'alarm' ? 'active' : ''}`} data-link="alarm" data-url="alarm" onClick={e => onClikeGnb(e)}>
              <span className='newDot'></span>
            </li>
          </ul>
          <button className='plusButton'>만들기</button>
        </div>
      </div>
    </aside>
  );
}

export default Gnb;
