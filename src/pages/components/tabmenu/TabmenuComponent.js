import React,{ useState } from 'react';

import "../scss/_mixin.scss";
import "../../../css/tabmenu.css";
import { Input1 } from './InputComponent';

{/* 내부 컴포넌트 */}
export const Tabmenu = (props) => {
  const {title, className, bg, text} = props;
  // const tabmenu2 = ["하나","둘","셋","넷"];
  // const [tabtype, setTabType] = useState(text[0]);
  const [moneyTabs, setMoneyTabs] = useState(text[0]);
 
  return (
    <>
      {/* <div className="mixinTitle">{title}</div> */}
      
      {text &&
      <>
      <ul className={className}>
        {text.map((data,index) => {
          const liveOn = (e) => {
            const {targetTab} = e.currentTarget.dataset;
            if (targetTab === data) setMoneyTabs(data)
            else console.log('no')
          }
          return (
            <li onClick={e=>liveOn(e)} className={`${moneyTabs === data ? 'active' : ''}`} data-target-tab={data} key={index}>
              {data}
            </li>
          )
        })}
        {bg && <div className="wrapboxBg"></div>}
        <div className="underline"></div>
      </ul>   
      {/* <div className="cashReceipt">
      {moneyTabs === "소득공제용" && 
        <Input1>
          <input placeholder="주민번호 또는 휴데폰번호를 입력해주세요." />
        </Input1>
      }
      {moneyTabs === "지출증빙용" && 
        <Input1>
          <input placeholder="사업자번호를 입력해주세요." />
        </Input1>
      }
    </div>   */}
      </>
      }


    </>
  )
}

const TabmneuComponent = () => {

  const tabmenu2 = ["하나","둘","셋","넷"];

  return (
    <>
    
      <Tabmenu title="tabmenuStyle-1" className="subTabmenu1" inputName="inputTitle" text={tabmenu2} />
      <section>
        <Tabmenu title="tabmenuStyle-2" className="subTabmenu2" inputName="inputTitle" text={tabmenu2} />
      </section>
      <Tabmenu title="tabmenuStyle-3" className="subTabmenu3" inputName="inputTitle" text={tabmenu2} />
      <Tabmenu title="tabmenuStyle-4" className="subTabmenu4" inputName="inputTitle" text={tabmenu2} />
      <Tabmenu title="tabmenuStyle-5" bg={true} className="subTabmenu5" inputName="inputTitle" text={tabmenu2} />
      <Tabmenu title="tabmenuStyle-6" className="subTabmenu6" inputName="inputTitle" text={tabmenu2} />
      <Tabmenu title="tabmenuStyle-7" className="subTabmenu7" inputName="inputTitle" text={tabmenu2} />

    </>
  )
}

export default TabmneuComponent;