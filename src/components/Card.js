import React from 'react';
import './Card.css'


const Card = ({id, name,height,mass,hairColor,skinColor,eyeColor,birthYear,gender,homeWorld}) => {
	
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
			</div>
		</div>

		);
}

export default Card;