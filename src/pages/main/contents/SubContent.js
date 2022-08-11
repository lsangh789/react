import React,{useState, useEffect} from 'react';
import '../css/subContent.css';

import SubContentMenu from './SubContentMenu';

  const SubContent = () => {

    const [types, setTypes] = useState('보통');

    const dataList = [
      {
        question: '로그아웃 방법을 모르겠어요',
        list: 1,
        text: <p>
                <br/>
                <br/>
                <font color="#632beb">📱모바일 앱&nbsp;</font><br/>
                <p>APP 로그인 &gt; 마이 페이지 &gt; 맨 하단의 '로그아웃' 버튼 클릭</p>
                <br/><br/>
                <font>💻PC(WEB)</font>
                <p>www.dalbitlive.com 로그인 - 우측 상단의 마이페이지 - '로그아웃' 버튼 클릭</p>
                <br/><br/><br/>
          </p>
        ,type:"일반"
      },
      {
        question: '라이브(LIVE)는 무엇인가요?',
        list: 2,
        text: <p>
                <br/>
                <p>방송방 내 채팅 기능이 정상적으로 동작하지 않는 경우, 아래의 내용을 참고해 주세요. </p>
                <br/>
                <br/>
                <font color="#9c00ff">📡Wi-fi / 셀룰러 데이터 환경이 원활하지 않은 경우</font>
                <p>통신망이 불안정한 장소 (예:엘리베이터/지하 등) 또는 통신사 이상으로 통신 환경이 불안정 할 때</p>
                <p>간혹 채팅 이슈가 발생할 수 있습니다. </p>
                <p>실시간 채팅은 타 웹페이지 이용보다 더 데이터 환경에 예민하게 반응합니다. </p>
                <br/>
                <font color="#9c00ff">💻전체 서버 이슈인 경우</font>
                <p>달빛라이브 서비스 내의 전체적인 이슈로 모든 이용자 분들에게 동일 현상이 나타나는 경우,</p>
                <p>1:1 문의하기로 문의해주시면 보다 빠른 조치할 수 있도록 도움 드리겠습니다.</p>
                <br/>
                <br/>
                <br/>
        </p>
        ,type:"일반"
      },
      {
        question: '채팅이 안보여요 or 채팅이 늦게 올라와요',
        list: 3,
        text: <p>
                <br/>
                <p>DJ가 방송을 진행하면, 청취자가 텍스트로 응답하는 <font color='red'>소통 라이브 방송 서비스 </font>입니다.</p>
                <p>방송 당 2시간동안 진행하실 수 있고,</p>
                <u>최대 2시간 30분 동안</u>
                <p>방송을 진행 할 수 있습니다.</p>
                <br/>
        </p>
        ,type:"일반"
      },
      {
        question: '스타란 무엇인가요?',
        list: 4,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '달과 별의 차이점이 뭔가요?',
        list: 5,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '로그아웃 방법을 모르겠어요',
        list: 6,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '스타란 무엇인가요?',
        list: 7,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '달과 별의 차이점이 무엇인가요?',
        list: 8,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '달라는 어떤 서비스인가요?',
        list: 9,
        text: 'a'
        ,type:"일반"
      },
      {
        question: 'FAN은 어떻게 하나요?',
        list: 10,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '어플 실행 시 업데이트를 하라는데 앱 업데이트가 안돼요.',
        list: 11,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '스페셜 DJ 혜택이 뭔가요?',
        list: 12,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '구매한 달로 무엇을 할 수 있어요?',
        list: 13,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '스페셜 DJ 신청은 어떻게 하나요?',
        list: 14,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '팬보드는 무엇인가요?',
        list: 15,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '회원을 차단하고 싶어요.',
        list: 16,
        text: 'a'
        ,type:"일반"
      },
      {
        question: '방송을 수정하고 싶어요. 어떻게 하나요?',
        list: 17,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '방송을  친구에게 공유하고 싶어요',
        list: 18,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '방송방은 어떻게 만드나요?',
        list: 19,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '신입청취자 배지는 언제 붙나요?',
        list: 20,
        text: 'a'
        ,type:"방송"
      },
      {
        question: 'PC(WEB)에서도 방송이 가능한가요?',
        list: 21,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '선물을 한번에 여러개 보낼 수 있나요?',
        list: 22,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '방송연장 이란 무엇인가요?',
        list: 23,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '신입DJ 배지는 언제 붙나요?',
        list: 24,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '받은 선물 내역 이란 무엇인가요?',
        list: 25,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '신고는 어떻게 하나요?',
        list: 26,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '화면이 자꾸 꺼져서 채팅 보기가 힘들어요.',
        list: 27,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '부스터란 무엇인가요?',
        list: 28,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '방송을 종료하고 싶어요. 어떻게 하나요?',
        list: 29,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '사연이란 무엇인가요?',
        list: 30,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '마이크 사용 권한이 없으면 방송이 불가한가요?',
        list: 31,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '빠른 말 이란 무엇인가요?',
        list: 32,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '선물은 어떻게 하나요?',
        list: 33,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '몰래 보내기란 무엇인가요?',
        list: 34,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '방송은 어떻게 하나요?',
        list: 35,
        text: 'a'
        ,type:"방송"
      },
      {
        question: '중복 결제가 된 것 같아요.',
        list: 36,
        text: 'a'
        ,type:"결제"
      },
      {
        question: '구매한 달을 환불받고 싶어요.',
        list: 37,
        text: 'a'
        ,type:"결제"
      },
      {
        question: 'iPhone에서 결제를 하였는데 달이 충전되지 않아요',
        list: 38,
        text: 'a'
        ,type:"결제"
      },
      {
        question: 'iOS(아이폰) 인앱 결제를 취소하고 싶어요',
        list: 39,
        text: 'a'
        ,type:"결제"
      },
      {
        question: '모니터링 기준은 어떻게 되나요?',
        list: 40,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '타인 명의로 환전 진행이 가능한가요?',
        list: 41,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '환전 신청 후 언제 입금되나요?',
        list: 42,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '환전이 뭔가요?',
        list: 43,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '환전 하는 방법을 알고싶어요.',
        list: 44,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '환전할 때 꼭 알아야 할 정보가 있나요?',
        list: 45,
        text: 'a'
        ,type:"계정"
      },
      {
        question: '생년월일 혹은 성별 정보도 수정이 가능한가요?',
        list: 46,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '타인의 명의를 도용해서 본인 확인을 하면 어떻게 되나요?',
        list: 47,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '내 개인정보를 사용한 사람을 처벌하고 싶어요.',
        list: 48,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '탈퇴는 어떻게 하나요?',
        list: 49,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '해외에서 이용하는 사람은 본인인증을 어떻게 해요?',
        list: 50,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '계정 비활성화(정지) 이유가 궁금해요',
        list: 51,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '가입한 계정을 찾고 싶어요',
        list: 52,
        text: 'a'
        ,type:"기타"
      },
      {
        question: '개명을 했는데 이름 변경이 가능한가요?',
        list: 53,
        text: 'a'
        ,type:"기타"
      }
    ]
    
    const [activeIndex, setActiveIndex] = useState();

  return (
    
    <div className='subContent'>
      {/* 일반 */}
      <div className='faqSection'>  
        <div className='faqTitle'>일반</div>
          <div className='faqWrap'>
            {dataList.map((item, idx) =>{
              if(item.type === '일반'){
              return (
                             
                  <React.Fragment key={idx}>
                    <SubContentMenu
                      data={item}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </React.Fragment>
                                     
              )
              }
            })}
        </div>
      </div>
      {/* 방송 */}
      <div className='faqSection'>  
        <div className='faqTitle'>방송</div>
          <div className='faqWrap'>
            {dataList.map((item, idx) =>{
              if(item.type === '방송'){
              return (
                             
                  <React.Fragment key={idx}>
                    <SubContentMenu
                      data={item}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </React.Fragment>
                                     
              )
              }
            })}
        </div>
      </div>
      {/* 결제 */}
      <div className='faqSection'>  
        <div className='faqTitle'>결제</div>
          <div className='faqWrap'>
            {dataList.map((item, idx) =>{
              if(item.type === '결제'){
              return (
                             
                  <React.Fragment key={idx}>
                    <SubContentMenu
                      data={item}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </React.Fragment>
                                     
              )
              }
            })}
        </div>
      </div>
      {/* 계정 */}
      <div className='faqSection'>  
        <div className='faqTitle'>계정</div>
          <div className='faqWrap'>
            {dataList.map((item, idx) =>{
              if(item.type === '계정'){
              return (
                             
                  <React.Fragment key={idx}>
                    <SubContentMenu
                      data={item}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </React.Fragment>
                                     
              )
              }
            })}
        </div>
      </div>
      {/* 기타 */}
      <div className='faqSection'>  
        <div className='faqTitle'>기타</div>
          <div className='faqWrap'>
            {dataList.map((item, idx) =>{
              if(item.type === '기타'){
              return (
                             
                  <React.Fragment key={idx}>
                    <SubContentMenu
                      data={item}
                      activeIndex={activeIndex}
                      setActiveIndex={setActiveIndex}
                    />
                  </React.Fragment>
                                     
              )
              }
            })}
        </div>
      </div>
      
    </div>
  );

}

export default SubContent;
  