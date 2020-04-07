import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';
import logo from '../images/pokemon-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons };
  }
  render() {
    return (
      <div className='App'>
        <h1 className='App__title'>
          Mi lista de
          <span>
            <img className='App__title-img' src={logo} alt='Logo de Pokemon' />
          </span>
        </h1>
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
