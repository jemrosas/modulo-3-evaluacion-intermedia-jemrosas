import React from 'react';
// import '../stylesheets/App.scss';

const Pokemon = (props) => {
  // console.log(props.pokemon);

  const data = props.pokemon.types.map((type, index) => (
    <li key={index}>
      <p>{type.toUpperCase()}</p>
    </li>
  ));

  return (
    <>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <hr></hr>
      <h2>{props.pokemon.name}</h2>
      <hr></hr>
      <ul>{data}</ul>
    </>
  );
};

export default Pokemon;
