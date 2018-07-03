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
	 componentDidMount(){           
         this.getHome(this.props.homeWorld);                         
  }  
	getHome = (homeWorld) =>{
		fetch(homeWorld)
		.then(resp => resp.json())
		.then(data => this.setState({homeWorld: data.name}))
		.catch(err => console.log(`Error getting home world ${err}`))
	}

	
	
render(){
		const {id, name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender} = this.props;
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