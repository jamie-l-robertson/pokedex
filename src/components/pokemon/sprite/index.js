import React, { Fragment } from "react";

const batch_key = "v1546788910";

export const Sprite = props => {
  let image;

  function pad(n, z) {
    z = z || "0";
    n = n + "";

    if (n === "201") return "201_11";

    return n.length >= 3
      ? n + "_00"
      : new Array(3 - n.length + 1).join(z) + n + "_00";
  }

  image = (
    <Fragment>
      <img
        src={`https://res.cloudinary.com/ru7hl355/image/upload/f_auto/${batch_key}/pokemon/pokemon_icon_${pad(
          props.id,
          0
        )}${props.revealShiny ? `_shiny` : ``}.png`}
        alt={props.revealShiny ? props.alt + " shiny" : props.alt}
        width="130"
        height="130"
      />
      {props.preloadSpriteVariants && (
        <link
          rel="preload"
          href={`https://res.cloudinary.com/ru7hl355/image/upload/f_auto/${batch_key}/pokemon/pokemon_icon_${pad(
            props.id,
            0
          )}_shiny.png`}
          as="image"
        />
      )}
    </Fragment>
  );

  return <React.Fragment>{image}</React.Fragment>;
};
