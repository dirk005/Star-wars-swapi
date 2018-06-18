import React from 'react';
import './Card.css'


class Card  extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			homeWorld : '',
			films : []
			
		}
	}
	
	getHome = (homeWorld) =>{
		fetch(homeWorld)
		.then(resp => resp.json())
		.then(data => this.setState({homeWorld: data.name}))
		.catch(err => console.log(`Error getting home world ${err}`))
	}

	// getFilms = (films) => {
	
	// Promise.all(films.map(url =>{
	// 	return fetch(url).then(resp => resp.json())
	// }))
	// .then(results => {
	// 	return results.map(film => {
	// 		this.setState({films: this.state.concat(film.title)})
	// 	})
	// }).catch(() => console.log('Error!'))

	// }
	
render(){
		const {id, name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender,homeWorld,films,spiecies,vehecles,starships} =this.props;
		this.getHome(homeWorld);
		// this.getFilms(films);
		//console.log(films)
		return (
		<div className='cardStyle dib br3 pa3 ma2 grow bw2 shadow-5'>
			<h1>{name}</h1>
			<hr/>
			<div>				
				<p>Height : {height}</p>
				<p>Mass : {mass}</p>
				<p>Hair Color : {hairColor}</p>
				<p>Skin Color : {skinColor}</p>
				<p>Eye Color : {eyeColor}</p>
				<p>Birth Year : {birthYear}</p>
				<p>Gender : {gender}</p>
				<p>Home World : {this.state.homeWorld}</p>
				
			</div>
		</div>

		);
	}
}



export default Card;