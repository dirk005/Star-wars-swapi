import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField,seachChange}) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--black'
				type='search' 
				placeholder='Search Character'
				onChange={seachChange}
			/>
		</div>
		);
}

export default SearchBox;