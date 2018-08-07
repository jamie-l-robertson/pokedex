import React from 'react';
import { Link } from 'react-router-dom';
import POKEMON_DETAIL_Q from '../../../thread/queries/getPokeDetail';

export const Pagination = props => {
  const { current, provider } = props;

  return (
    <React.Fragment>
      <Link
        to={`/pokedex/pokemon/${current - 1}`}
        className="btn btn--previous"
        onMouseOver={() =>
          provider.query({
            query: POKEMON_DETAIL_Q,
            variables: { pokeid: (current - 1).toString() },
          })
        }
      >
        &laquo; Previous Pokemon
      </Link>
      <Link
        to={`/pokedex/pokemon/${current + 1}`}
        className="btn btn--next"
        onMouseOver={() =>
          provider.query({
            query: POKEMON_DETAIL_Q,
            variables: { pokeid: (current + 1).toString() },
          })
        }
      >
        Next Pokemon &raquo;
      </Link>
    </React.Fragment>
  );
};
