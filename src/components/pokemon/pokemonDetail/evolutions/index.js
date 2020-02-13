import React from 'react';
import { Link } from 'react-router-dom';
import { Sprite } from '../../sprite';
import { EvolveWrapper } from './styles';

export const Evolutions = props => {
  const { evolvements: { evos }, pokeId } = props.data;

  return (
    <React.Fragment>
      {evos && evos.length && (
        <EvolveWrapper>
          <h2>Evolutions</h2>
          <ul>
            {evos.map((evolvement, i) => (
              <li key={`evolvement-` + i}>
                <Link to={`/pokemon?id=${evolvement.id}`} id={pokeId}>
                  <Sprite id={`${evolvement.id}`} />
                  {evolvement.name}
                </Link>
              </li>
            ))}
          </ul>
        </EvolveWrapper>
      )}
    </React.Fragment>
  );
};
