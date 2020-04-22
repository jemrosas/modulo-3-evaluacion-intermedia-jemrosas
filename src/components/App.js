import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/App.scss';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';
import logo from '../images/pokemon-logo.png';

const App = () => {
  const [data] = useState(pokemons);

  return (
    <div className='App'>
      <h1 className='App__title'>
        Mi lista de
        <span>
          <img className='App__title-img' src={logo} alt='Logo de Pokemon' />
        </span>
      </h1>
      <PokeList pokemons={data} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.string,
  pokemons: PropTypes.string,
};

export default App;
