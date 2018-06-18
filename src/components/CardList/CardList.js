import React from 'react';
import Card from '../Card/Card.js';
import './CardList.css'

const CardList = ({characters}) => {

	return(
		<div className="listStyle">
		{
			characters.map((user, i) =>{
				return (
					<Card
		 				key={i}
		 				id={characters[i]} 
		 				name={characters[i].name}
		 				height={characters[i].height} 
		 				mass={characters[i].mass} 
		 				hairColor={characters[i].hair_color} 
		 				skinColor={characters[i].skin_color} 
		 				eyeColor={characters[i].eye_color} 
		 				birthYear={characters[i].birth_year}
		 				gender={characters[i].gender}
		 				homeWorld={characters[i].homeworld}
		 				films={characters[i].films}
					 />
		 			);
			})
		}
		</div>

		);
}

export default CardList;