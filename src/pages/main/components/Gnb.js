import React,{useState, useEffect} from 'react';
import '../css/gnb.css';

function Gnb () {

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
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbLive-off.png'></img>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbClip-off.png'></img>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbSearch-off.png'></img>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbRank-off.png'></img>
            </li>
          </ul>
        </nav>
        <div className='subGnbNavigation'>
          <ul>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbMy-off.png'></img>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbMail-off.png'></img>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbStore-off.png'></img>
              <span className='saleStore'>SALE</span>
            </li>
            <li className='cursorPointer'>
              <img src='https://image.dalbitlive.com/common/gnb/gnbAllim-off.png'></img>
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
