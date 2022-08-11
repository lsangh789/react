import React from "react";

import '../css/searchFrom.css'

const seachInputClicks = () => {
  document.getElementById('searchId').classList.add('focus');
}

const seachInput = () => {
  document.getElementById('searchId').classList.remove('focus');
}

const SearchForm = () => {

  return(


    <div className="searchFrom">
      <div className="inputItems">
        <label id="searchId" className="inputBox">
          <input onFocus={seachInputClicks} onBlur={seachInput}  className='searchInput' placeholder='닉네임, 방송, 클립을 입력해주세요.' />
        </label>
      </div>
    </div>



  );

};

export default SearchForm;