import React, {useState} from 'react';
import { Link } from 'react-scroll/modules';
// import { useHistory } from 'react-router-dom';

import '../css/header2.css';

const Header = () => {
  // const history = useHistory();
  const [link, setLink] = useState(false);

  // npm install --save react-scroll 스크롤 설치
  const clikeLink = (e) => {
    const {targetMenu} = e.currentTarget.dataset;
    if (targetMenu === "live") {
      setLink(true);
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

          <a className='navList' data-target-menu="live" href="/">
            <span className='navTitle'>Live</span>
          </a>

          <div className='navList-active'>
            <span className='navTitle'>Live</span>
            <ul className='navWrap'>
              <Link to='GNB1' spy={true} smooth={true}>
                <li className='navDepth'>GNB</li>
              </Link>
              <Link to='mainSwiper2' spy={true} smooth={true}>
                <li className='navDepth'>MainSwiper</li>
              </Link>
              <Link to='BannerWrap3' spy={true} smooth={true}>
                <li className='navDepth'>BannerWrap</li>
              </Link>
              <Link to='Favorites4' spy={true} smooth={true}>
                <li className='navDepth'>Favorites</li>
              </Link>
              <Link to='LiveContents5' spy={true} smooth={true}>
                <li className='navDepth'>LiveContents</li>
              </Link>
              <Link to='TopTen6' spy={true} smooth={true}>
                <li className='navDepth'>TopTen</li>
              </Link>
              <Link to='Footer7' spy={true} smooth={true}>
                <li className='navDepth'>Footer</li>
              </Link>
            </ul>
          </div>

          <a className='navList' data-target-menu="clip" href="/Clip">
            <span className='navTitle'>Clip</span>
          </a>

          <div className='navList-active'>
            <span className='navTitle'>Clip</span>
            <ul className='navWrap'>
              <Link to='ClipHeader1' spy={true} smooth={true}>
                <li className='navDepth'>ClipHeader</li>
              </Link>
              <Link to='HotClip2' spy={true} smooth={true}>
                <li className='navDepth'>HotClip</li>
              </Link>
              <Link to='ClipBannerWrap3' spy={true} smooth={true}>
                <li className='navDepth'>BannerWrap</li>
              </Link>
              <Link to='LikeSubWrap4' spy={true} smooth={true}>
                <li className='navDepth'>LikeSubWrap</li>
              </Link>
              <Link to='ClipDrawer5' spy={true} smooth={true}>
                <li className='navDepth'>ClipDrawer</li>
              </Link>
              <Link to='ClipList7' spy={true} smooth={true}>
                <li className='navDepth'>ClipList</li>
              </Link>
              
            </ul>
          </div>
          

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