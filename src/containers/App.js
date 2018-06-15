import React, { Component } from 'react';
import './App.css';
import Logo from '../img/Star-Wars-Logo.png';
import SearchBox from '../components/SearchBox/searchBox.js';
import Scroll from '../components/Scroll/scroll';
import CardList from '../components/CardList/CardList';



class App extends Component {
  constructor(){
    super();
    this.state = {      
      characters: [],
      characters2: [],
      characters3: [],
      characters4: [],
      characters5: [],
      characters6: [],
      characters7: [],
      characters8: [],
      characters9: [],
      searchField:'',
      url :'',     
    }
   }

  componentDidMount(){    
          
        let url= 'https://swapi.co/api/people/';
        
        fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters:result.results}))
          .catch((err) => console.log('error',err));  
      
       url= 'https://swapi.co/api/people/?page=2';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters2:result.results}))
          .catch((err) => console.log('error',err));
          url= 'https://swapi.co/api/people/?page=3';

      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters3:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=4';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters4:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=5';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters5:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=6';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters6:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=7';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters7:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=8';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters8:result.results}))
          .catch((err) => console.log('error',err));

          url= 'https://swapi.co/api/people/?page=9';
      fetch(`${url}`)
         .then(resp => resp.json())   
          .then(result => this.setState({characters9:result.results}))
          .catch((err) => console.log('error',err));
      
     
  }
 

  onSearchChange = (event) => {
    this.setState({searchField : event.target.value});
  }

  render() {
    const {characters,characters2,characters3,characters4,characters5,characters6,characters7,characters8,characters9,searchField} =this.state;  
    const characterArray = characters.concat(characters2).concat(characters3).concat(characters4).concat(characters5).concat(characters6).concat(characters7).concat(characters8).concat(characters9);
      const filterCharacters = characterArray.filter(character =>{
      return character.name.toLowerCase().includes(searchField.toLowerCase());
    })
    
    return !characters.length ?
      (
          <div>
            <div className="stars"></div>
            <div className="twinkle"></div>
            <div className="loader"></div>
          </div>
       )
        : (
      <div className="App">
      <div className="stars"></div>
        <div className="twinkle"></div>
        <header className="App-header">
        
          <img className="App-logo" src={Logo} alt='Star Wars Logo' />
          <SearchBox seachChange={this.onSearchChange}/>
        </header>
        <Scroll>
          <CardList characters={filterCharacters} />

        </Scroll>
      </div>
    );
  }
}

export default App;

 