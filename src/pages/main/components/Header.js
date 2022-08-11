import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll/modules';
import { useHistory, NavLink } from 'react-router-dom';

import '../css/header.css';

const Header = (props) => {
  const {menu} = props;
  const {menu2} = props;
  const {menu3} = props;
  const {menu4} = props;
  const {menu5} = props;
  const {menu6} = props;
  const {menu7} = props;
  const {menu8} = props;

  const history = useHistory();

  const nav = ["live", "clip", "search", "ranking","my","message", 'store', 'noticeWrap'];
  const navs = ["Live", "Clip", "Search", "Ranking","My","Message", "Store", "NoticeWrap"];

  const [active ,setActive] = useState(0);

  // npm install --save react-scroll 스크롤 설치
  const clikeLink = (e, index) => {
    const {targetMenu} = e.currentTarget.dataset;
    console.log(targetMenu);
    if (Number(targetMenu) === index) {
      setActive(Number(targetMenu));
      history.push(navs[Number(targetMenu)]);
    }
  };

  return (
    <header>
      <div className='styleLeft'>
        <div className='titleWrap'>
          <h1 className='titleH1'>Style Guide</h1>
          <span className='titleVersion'>Ver. 2022.05.03</span>
        </div>
        <nav className='nav'>

          {nav.map((data, index) => {
            return (
              <React.Fragment key={index}>
              <div className={`navList ${active === index ? "active" : ""}`} data-target-menu={index} onClick={(e) => clikeLink(e,index)}>
                <span className='navTitle'>{data}</span>
              </div>
              <div className='navList-active'>
                <span className='navTitle'>{data}</span>
                <ul className="navWrap">
                {data === 'live' ? menu.map((list,idx) => {
                  return (
                    <Link to={list.to} spy={true} smooth={true} key={idx}>
                      <li className='navDepth'>{list.name}</li>
                    </Link>
                  )
                  }) 
                  :
                  data === 'clip' ? menu2.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                    }) 
                  :
                  data === 'search' ? menu3.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                    }) 
                  :
                  data === 'ranking' ? menu4.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                    }) 
                  :
                  data === 'my' ? menu5.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                  })
                  :
                  data === 'massage' ? menu6.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                  }) 
                  :
                  data === 'store' ? menu7.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                  }) 
                  :
                  menu8.map((list,idx) => {
                    return (
                      <Link to={list.to} spy={true} smooth={true} key={idx}>
                        <li className='navDepth'>{list.name}</li>
                      </Link>
                    )
                  }) 
                  
                }
                
                </ul>
              </div>
              </React.Fragment>
            )
          })}
          

        </nav>
        <div className='styleHidden'>
          <span className='iconS2'>
            <span className='iconClose'></span>
          </span>
        </div>
      </div>
    </header>
  );

};

export default Header;