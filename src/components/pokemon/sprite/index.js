import React from "react";

export const Sprite = props => {
  let image, shiny, alolan;

  function pad(n, z) {
    z = z || "0";
    n = n + "";

    if (n === "201") return "201_11";

    return n.length >= 3
      ? n + "_00"
      : new Array(3 - n.length + 1).join(z) + n + "_00";
  }

  image = (
    <img
      src={`https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_${pad(
        props.id,
        0
      )}${props.revealShiny ? `_shiny` : ``}.png`}
    />
  );

  shiny = props.showShiny ? (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pad(
        props.id,
        0
      )}__shiny.png`}
      alt={`${props.alt} - Shiny`}
    />
  ) : null;

  alolan = props.alolan ? (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        props.alolan
      }.png`}
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
