import React from 'react';
import '../css/container.css';

function Container(props) {
	const {type, children} = props;
	console.log(type);
  
  return (
    // <div id={`container ${type === 'pc' ? 'pctype' : 'mobiletype'}`}>
    <div id="container">
			{children}
    </div>
  );
}

export default Container;
