import { 
		CHANGE_SEARCH_FIELD,
		REQUEST_CHARACTER_PENDING,
		REQUEST_CHARACTER_SUCCESS,
	 	REQUEST_CHARACTER_FAILED
	 } from './constants.js';

const initialStateSearch = {
	searchField : ''
}

export const searchCharacters = (state =initialStateSearch, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return  Object.assign({}, state , { searchField: action.payload });
		default:
			return state;
	}
}

const initialStateCharacters = {
	isPending : false,
	characters: [],
	url: 'https://swapi.co/api/people/',
	error:''
}

export const requestCharacters = ( state = initialStateCharacters ,action={}) =>{
	//
	console.log(action)
	switch(action.type){
		case REQUEST_CHARACTER_PENDING:
			return Object.assign({},state,{isPending: true})
		case REQUEST_CHARACTER_SUCCESS:
			if (action.payload.next === null || action.payload === 'done'){
				return Object.assign({}, state,{url:action.payload.next, isPending: false})
				}else{
			
			return Object.assign({}, state,{characters: state.characters.concat(action.payload.results),url:action.payload.next, isPending: true})
			}
		case REQUEST_CHARACTER_FAILED:
			return Object.assign({}, state, {characters:action.payload, isPending:false})
		default:
			return state;
	}
}
