import React, { useState } from "react";
import { Sprite } from "../../sprite";
import { PillList } from "../../pillList";
import { Egg } from "../egg";
import { DetailHeaderWrapper } from "./styles";

function DetailHeader({ data }) {
  const [revealShiny, setRevealShiny] = useState(false);
  const { name, pokeId, shiny, pokemonType, eggDistance, rarity } = data;
  let [prevPoke, setPrevPoke] = useState(null);

  function handleShinyClick() {
    setRevealShiny(!revealShiny);
  }

  if (pokeId !== prevPoke) {
    setPrevPoke(pokeId);
    setRevealShiny(false);
  }

  return (
    <React.Fragment>
      <DetailHeaderWrapper>
        <Sprite
          id={pokeId}
          alt="Normal variant"
          revealShiny={revealShiny}
          preloadSpriteVariants={shiny}
        />
        <div className="content">
          <h1>
            {name}
            {shiny ? (
              <span
                className="icon"
                role="img"
                title="Shiny available"
                aria-label="Shiny available"
                onClick={handleShinyClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path
                    fill="#F4DF19"
                    d="M24.5 0l7.1 16.4 16.2 7.5-16.3 7.4-7 16.5-7.4-16.5-16-7.4 16.1-7.6zM42.2 52.2l7.2 16.4 16.2 7.5-16.3 7.4-7.1 16.5-7.3-16.5-16-7.4 16-7.6zM74.5 16.7l7.1 16.4 16.2 7.5L81.5 48l-7 16.4L67.1 48l-16-7.4L67.2 33z"
                  />
                </svg>
              </span>
            ) : null}
          </h1>
          {pokemonType ? <PillList data={pokemonType} /> : null}
          {rarity ? (
            <span className="rarity">{rarity.split("_").join(" ")}</span>
          ) : null}
          {eggDistance ? (
            <span
              className="icon icon--large icon--egg"
              role="img"
              aria-label={`Hatches from ${eggDistance}km egg`}
            >
              <Egg distance={eggDistance} />
            </span>
          ) : null}
          <span className="identifier">#{pokeId}</span>
        </div>
      </DetailHeaderWrapper>
    </React.Fragment>
  );
}

export default DetailHeader;
