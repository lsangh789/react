import React from "react";

const ProfileCard = (props) => {

  const {profileList} = props;

  return(

    <>
      {profileList.map((data, index)=>{
        return(
          <section className="profileCard" key={index}>
            <div className="cardWrap">
              <div className="userInfo">
                <div className="photo">
                  <img src={data.img} />
                  <div className="frame" style={ {backgroundImage:`url('https://image.dalbitlive.com/level/frame/200923/AAA/ico_frame_19.png')`} } ></div>
                </div>
                <div className="info">
                  <div className="item">
                    <em className="level">Lv{data.lv}</em>
                    <em className={`gender ${data.gender === 'g' ? 'female' : 'male'}`}></em>
                    <span className="nick">{data.nick}</span>
                  </div>
                  <div className="item">
                    <span className="userid">{data.id}</span>
                  </div>
                </div>
              </div>
              <div className="count">
                <div className="item">
                  <span>{data.fan}</span>
                  <i>팬</i>
                </div>
                <div className="item">
                  <span>{data.star}</span>
                  <i>스타</i>
                </div>
                <div className="item">
                  <span>{data.like}</span>
                  <i>좋아요</i>
                </div>
              </div>
            </div>
          </section>
        )
      })
      }
      
      </>
  );

};

export default ProfileCard;