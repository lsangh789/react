import React from "react";

import Inquiry from "./Inquiry";

import '../css/post.css';

const Post = (props) => {

  const {post} = props;

  return(

    <>
      <div className="post">
        {post.map((post, idx)=>{
          return(
            <React.Fragment key={idx}>
              {post.sub === 'y' ? <Inquiry post={post.list} />
                :
              (post.list).map((data, index)=>{
                return(
                  <div className="listRow" key={index}>
                    <div className="photo">
                      <img src={data.img} />
                      <span className={`newBadge ${data.new === '' ? 'active' : ''}`}>N</span>
                    </div>
                    <div className="listContent">
                      <div className="title">{data.title}</div>
                      <div className={`text ${data.text === '' ? 'active' : ''}`}>{data.text}</div>
                      <div className="date">{data.date}</div>
                    </div>
                    <div className={`listViewBtn ${data.btn === 'y' ? '' : 'active'}`}></div>
                  </div>   
                )
             
              })

              }
            </React.Fragment>

          )
        })
        }
      </div>
    </>

  );

};

export default Post;