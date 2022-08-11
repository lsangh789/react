import React, {useState} from 'react';
import Explanation from '../contents/Explanation';
import Ranking from '../contents/Ranking';

function Content() {
  const [tab, setTab] = useState("explanation");
  const ExplanationTab = () => setTab("explanation");
    
  const RankingTab = e => {
    setTab(e.target.value);
  }
  
  return (
    <div className='page'>
			<img src="https://image.dalbitlive.com/event/gotomoon/event_7781-top.png" />
				<div className='pageContent'>
					<div className='tabWrap'>
						<button className='tabMenu' onClick={ExplanationTab}>
										<img src='https://image.dalbitlive.com/event/gotomoon/event_gotomoonTitle-info.png' className='titleImg' alt='이벤트 설명' />
						</button>
						<button className='tabMenu' onClick={RankingTab} value={'ranking'}>
										<img onClick={RankingTab} value={'ranking'} src='https://image.dalbitlive.com/event/gotomoon/event_gotomoonTitle-rank.png' className='titleImg' alt='이벤트 랭킹' />
						</button>
					</div>
					{tab === "explanation" ?
						<Explanation />
						:
						<Ranking />
					}			
				</div>
		</div>
  );
}

export default Content;
