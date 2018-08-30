import React from "react";
import { Link } from "react-router-dom";
import { PaginationWrapper } from "./styles";
import POKEMON_DETAIL_Q from "../../../thread/queries/getPokeDetail";

export const Pagination = props => {
  const { current, provider } = props;

  return (
    <PaginationWrapper>
      {current - 1 !== 0 ? (
        <Link
          to={`/pokemon/${current - 1}`}
          className="btn btn--previous"
          aria-label="Previous Pokemon"
          onMouseOver={() =>
            provider.query({
              query: POKEMON_DETAIL_Q,
              variables: { pokeid: (current - 1).toString() }
            })
          }
        >
          # {(current - 1).toString()}
        </Link>
      ) : null}
      {current + 1 < 251 ? (
        <Link
          to={`/pokemon/${current + 1}`}
          className="btn btn--next"
          aria-label="Next Pokemon"
          onMouseOver={() =>
            provider.query({
              query: POKEMON_DETAIL_Q,
              variables: { pokeid: (current + 1).toString() }
            })
          }
        >
          # {(current + 1).toString()}
        </Link>
      ) : null}
    </PaginationWrapper>
  );
};
