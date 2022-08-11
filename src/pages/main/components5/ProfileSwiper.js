import React from "react";

const ProfileSwiper = (props) => {

  const {profileList} = props;

  return(

    <>
      {profileList.map((data, index)=>{
        return(
          <React.Fragment key={index}>
            <section className="profileSwiper">
              <div className="swiper-slide">
                <div className="photo cursor">
                  <img src={data.img} />
                </div>
              </div>
            </section>
            <div className="swiperBottom"></div>
          </React.Fragment>
        )
      })
      }

    </>

  );

};

export default ProfileSwiper;