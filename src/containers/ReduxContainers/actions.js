import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_CHARACTER_PENDING,
		REQUEST_CHARACTER_SUCCESS,
	 	REQUEST_CHARACTER_FAILED
	 } from './constants.js';

export const setSearchField = (text) => ( {
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestCharacters = (url) => (dispatch) => {
	dispatch({type : REQUEST_CHARACTER_PENDING });	
	if(url === null){		
		dispatch({type : REQUEST_CHARACTER_SUCCESS , payload :'done'})
	}else {
	fetch(url)
		.then(response => response.json())
		.then(data => dispatch({type : REQUEST_CHARACTER_SUCCESS , payload :data}))
		.catch(error => dispatch({type: REQUEST_CHARACTER_FAILED,payload :error}))	
		}
}
