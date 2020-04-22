import React from 'react';
import '../stylesheets/PokeList.scss';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const dataList = props.pokemons.map((pokemon) => (
    <li className='pokeCard' key={pokemon.id} id={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </li>
  ));

  return <ul className='pokeList'>{dataList}</ul>;
};

export default PokeList;
