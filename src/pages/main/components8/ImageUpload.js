import React from "react";

import '../css/imageUpload.css';

const ImageUpload = () => {

  return(

    <div className="imageUpload">
      <div className="titleWrap">
        <span className="title">사진 첨부</span>
        <span className="subTitles">(최대 10MB, 최대 3매)</span>
      </div>
      <div className="uploadWrap">
        <label className="uploadlabel">
          <input className="blind" type='file' />
        </label>
      </div>
    </div>

  );

};

export default ImageUpload;