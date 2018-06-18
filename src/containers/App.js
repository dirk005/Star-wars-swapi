import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Logo from '../img/Star-Wars-Logo.png';
import SearchBox from '../components/SearchBox/searchBox.js';
import Scroll from '../components/Scroll/scroll';
import CardList from '../components/CardList/CardList';
import Footer from '../components/Footer/Footer'
import { setSearchField, requestCharacters} from './ReduxContainers/actions'

const mapStateToProps = state => {
  return{
    searchField : state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending,
    url: state.requestCharacters.url,
    error: state.requestCharacters.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
    onRequestCharacters: (url) => dispatch(requestCharacters(url)),
    
  }
}

class App extends Component {  

  componentDidMount(){              
          this.props.onRequestCharacters(this.props.url);                
  }  
  shouldComponentUpdate(nextProps,nextState){
    if (this.props.searchField !== nextProps.searchField){
      return true;
    }
    return nextProps.url === this.props.url ? false : true;
    }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.searchField !== prevProps.searchField){
      return true;
    }else{
        if (prevProps.url === null){
          return false;
        } 
        if(this.props.url !== prevProps.url || this.props.url !== null){
         return this.props.onRequestCharacters(this.props.url)
       } 
     }
  }

  render() {
    const { searchField ,onSearchChange ,characters ,isPending} = this.props;
    console.log(characters)
      const filterCharacters = characters.filter(character =>{
       return character.name.toLowerCase().includes(searchField.toLowerCase());
    })   
    
    return isPending ?
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
          <SearchBox seachChange={onSearchChange}/>
        </header>
        <Scroll>
          <CardList characters={filterCharacters} />
        </Scroll>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 