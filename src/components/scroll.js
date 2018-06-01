import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className="scrollStyle" style={{overflowY: 'scroll',border: '2px solid #000', height: '700px'}}>
			{props.children}
		</div>
			
		);
}

export default Scroll;