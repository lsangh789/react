import React from "react";

import '../css/footer.css';

const Footer = () => {

  return (
    <footer id="footerWrap">
      <ul className="infoList">
        <li className="infoItem">이용약관</li>
        <li className="infoItem">개인정보</li>
        <li className="infoItem">청소년보호</li>
        <li className="infoItem">운영정책</li>
        <li className="infoItem">고객센터</li>
      </ul>
      <ul className="infoBox">
        <li>
          <span className="sbj">대표이사</span>
          <span>박진</span><span className="sbj">사업자등록번호</span>
          <span>409-81-49209</span>
        </li>
        <li>
          <span className="sbj">통신판매업 신고번호</span>
          <span>제2004-30호</span>
        </li>
        <li>
          <span className="sbj">주소</span>
          <span>광주광역시 서구 상무대로 773 4층</span>
        </li>
        <li className="isBlock">
          <span className="sbj">연락처</span>
          <span className="emp">1522-0251</span>
        </li>
        <li className="isBlock">
          <span className="sbj">제휴/이벤트</span>
          <span className="emp"><a href="mailto:help@dallalive.com" className="emailLink">help@dallalive.com</a></span>
        </li>
      </ul>
      <p className="copyright">Copyrightⓒ2021 by (주)여보야. All rights reserved.</p>
    </footer>
  );

};

export default Footer;