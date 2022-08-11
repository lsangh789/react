import React,{useState, useEffect} from 'react';
import '../css/ranking.css';


function Ranking() {

  // 가 데이터
  const myList = [ 4, "2", "김푸티짱", "84,100"]

  const list = [
    {
      rank : 1,
      expected : "5000",
      gender : "../../../img/g.png",
      name : "김푸티짱",
      darCoin : "214,870"
    },
    {
      rank : 2,
      expected : "3000",
      gender : "../../../img/g.png",
      name : "해피",
      darCoin : "201,489"
    },
    {
      rank : 3,
      expected : "3000",
      gender : "../../../img/m.png",
      name : "해피",
      darCoin : "201,488"
    },
    {
      rank : 10,
      expected : "3000",
      gender : "img/m.png",
      name : "해피",
      darCoin : "201,487"
    },
    {
      rank : 30,
      expected : "100",
      gender : "../../../img/m.png",
      name : "해피",
      darCoin : "201,486"
    },
    {
      rank : 32,
      expected : "0",
      gender : "../../../img/m.png",
      name : "해피",
      darCoin : "201,485"
    }
  ]

  // 클릭 할시 aniWrap backgroundImage 변경
  const [imgCount, setImgCount] = useState(2);

  const CountUp = () => {
    setImgCount(imgCount + 1);
    console.log(imgCount);
  }

    return (

      <div id='ranking'>
        <div className='myData'>
          <div className='myRankwrap' onClick={CountUp}>
            <div className='myRankList' >
                    <div className='listFront'>
                      <span className='listFrontText'>내순위</span>
                      <span className='badgeMyRank'>{myList[0]}</span>
                    </div>
                    <div className='thumbWrap'>
                      <div className="thumbImg">
                        <img src="https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg" />
                      </div>
                    </div>
                    <div className='listContent'>
                      <div className='listRow'>
                        <div className='badgeGroup'>
                          <span className="badgeMyLevel">Lv{myList[1]}</span>
                        </div>
                        <span className="nickName">{myList[2]}</span>
                      </div>
                    </div>
                    <div className='listBack'>
                      <span className="iconCoin"></span>
                      <span className="coinScore">{myList[3]}</span>
                    </div>
            </div>
          </div>

          <div className='aniWrap levelundefined' style={{ backgroundImage: `url("../../../img/aniLevel${imgCount}.webp")` }}>
            
            <div className='scoreWrap'>
              <span className='iconCoin'></span>
              <span className='scoreNow'>112,200 </span>
              <span className='scoreGoal'>/ 150,000</span>
            </div>
            <div className='rewardWrap'>
              <span className='rewardText'>다음보상</span>
              <div className='rewardBox'>
                <span className='iconDal'></span>
                <span className='rewardVal'>10</span>
                <span className='rewardUnit'>달</span>
              </div>
            </div>

          </div>
        </div>

        <div className='rankingData'>
          <div className='rankingWrap'>
            <div className='listRanking'>
              {
                list.map((data, idx) => {
                  return (
                    <>
                    <div className='border'>
                      <div className='member' key={idx}>
                        {data.rank <= 30 ?
                          <div className='memberRank'>
                            <span className='rankCount'>{data.rank}</span>
                            <span className='rankText'>위</span>
                          </div>
                          :
                          <div className='memberRankoutside'>
                            <span className='rankCount'>{data.rank}</span>                           
                          </div>
                        }  

                        <div className='thumbWrap'>
                          <div className="thumbImg">
                            <img src="https://photo.dalbitlive.com/profile_3/profile_f_200327.jpg" />
                          </div>
                        </div>
                        <div className='listContent'>
                          <div className='expected'>
                            <span>{data.expected}</span>
                            <span>달 지급 예정</span>
                          </div>
                          <div className='listRow'>
                            <div className='badgeGroup'>
                              <span className="badgeMyLevel">
                                <img src={data.gender} />
                              </span>
                            </div>
                            <span className="nickName">{data.name}</span>
                          </div>
                        </div>
                        <div className='listBack'>
                          <span className="iconCoin"></span>
                          <span className="coinScore">{data.darCoin}</span>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
              


            </div>
          </div>
        </div>
      </div>

    )


}

export default Ranking;