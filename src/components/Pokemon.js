import React from 'react';
// import '../stylesheets/App.scss';

const Pokemon = (props) => {
  // console.log(props.pokemon);

  const data = props.pokemon.types.map((type, index) => (
    <li key={index}>
      <p>{type}</p>
    </li>
  ));

  return (
    <>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h2>{props.pokemon.name.toUpperCase()}</h2>
      <ul>{data}</ul>
    </>
  );
};

export default Pokemon;
