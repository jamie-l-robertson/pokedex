import React from 'react';

export const Sprite = props => {
  let image, shiny, alolan;

  image = (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
      alt={props.alt}
    />
  );

  shiny = props.showShiny ? (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.id}.png`}
      alt={`${props.alt} - Shiny`}
    />
  ) : null;

  alolan = props.alolan ? (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.alolan}.png`}
      alt={`${props.alt} - Alolan`}
    />
  ) : null;

  return (
    <React.Fragment>
      {image}
      {shiny}
      {alolan}
    </React.Fragment>
  );
};
