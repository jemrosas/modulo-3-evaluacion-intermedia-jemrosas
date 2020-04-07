import React from 'react';
// import '../stylesheets/App.scss';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const dataList = props.pokemons.map((pokemon) => (
    <li key={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));

  return <ul>{dataList}</ul>;
};

export default PokeList;
