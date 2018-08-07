import React from 'react';
import { Sprite } from '../../sprite';
import { PillList } from '../../pillList';
import { DetailHeaderWrapper } from './styles';

export const DetailHeader = props => {
  const { name, pokeId, shinyAvailable, types, alolanForm, eggDistance, rarity } = props.data;

  // 🌴

  return (
    <React.Fragment>
      <DetailHeaderWrapper>
        <Sprite id={pokeId} alt="Normal variant" />
        <div className="content">
          <h1>
            {name}
            {shinyAvailable ? (
              <span className="icon" role="img" title="Shiny available" aria-label="Shiny available">
                ✨
              </span>
            ) : null}
            {alolanForm ? (
              <span className="icon" role="img" title="Alolan form available" aria-label="Alolan form available">
                🌴
              </span>
            ) : null}
          </h1>
          {types ? <PillList data={types} /> : null}
          {rarity ? <span className="rarity">{rarity.split('_').join(' ')}</span> : null}
          {eggDistance ? (
            <span className="icon icon--large icon--egg" role="img" aria-label={`Hatches from ${eggDistance}km egg`}>
              🥚 {eggDistance}km
            </span>
          ) : null}
          <span className="identifier">#{pokeId}</span>
        </div>
      </DetailHeaderWrapper>
    </React.Fragment>
  );
};
