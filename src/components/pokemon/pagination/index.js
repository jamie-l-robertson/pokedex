import React from 'react';
import { Link } from 'react-router-dom';

export const Pagination = props => {
  const { current } = props;

  return (
    <React.Fragment>
      <Link to={`/pokedex/pokemon/${current - 1}`} className="btn">
        &laquo; Previous Pokemon
      </Link>
      <Link to={`/pokedex/pokemon/${current + 1}`} className="btn btn-right">
        Next Pokemon &raquo;
      </Link>
    </React.Fragment>
  );
};
