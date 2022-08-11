import React from 'react';
import '../css/container.css';

function Container(props) {
	const {type, children} = props;
	// console.log(type);
  
  return (
    // <div id={`container ${type === 'pc' ? 'pctype' : 'mobiletype'}`}>
    <div  id="container">

      <div className='content pctype'>
        {children}
      </div>

    </div>
  );
}

export default Container;
