import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className="scrollBack">
			<div className="scrollStyle" >
				{props.children}
			</div>
		</div>
			
		);
}

export default Scroll;