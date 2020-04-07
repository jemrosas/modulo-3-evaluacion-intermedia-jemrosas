import React from 'react';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons };
  }
  render() {
    return (
      <div className='App'>
        <h1>Mi lista de pokemon</h1>
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
