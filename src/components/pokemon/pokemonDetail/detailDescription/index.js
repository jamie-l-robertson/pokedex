import React from 'react';
import { DetailDescriptionWrapper } from './styles';

export const DetailDescription = props => {
  const { shortDescription, description, gen } = props.data;
  let generation;

  switch (gen) {
    case '1':
      generation = 'Kanto';
      break;
    case '2':
      generation = 'Johto';
      break;

    case '3':
      generation = 'Hoenn';
      break;
    default:
      generation = null;
  }

  return (
    <DetailDescriptionWrapper>
      <h2>{shortDescription}</h2>
      <p>{description}</p>
      {generation != null ? (
        <p>
          Origin: <span className="region">{generation}</span>
        </p>
      ) : null}
    </DetailDescriptionWrapper>
  );
};
