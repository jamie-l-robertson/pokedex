import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PaginationWrapper } from "./styles";
import POKEMON_DETAIL_Q from "../../../thread/queries/getPokeDetail";

class Pagination extends Component {
  render() {
    const { current, provider, nextPokeSet } = this.props;

    return (
      <PaginationWrapper>
        {current - 1 !== 0 ? (
          <Link
            to={`/pokemon?id=${current - 1}`}
            className="btn btn--previous"
            aria-label="Previous Pokemon"
            onMouseOver={() =>
              provider.query({
                query: POKEMON_DETAIL_Q,
                variables: { pokeid: current - 1 }
              })
            }
          >
            # {(current - 1).toString()}
          </Link>
        ) : null}
        {nextPokeSet > 0 ? (
          <Link
            to={`/pokemon?id=${current + 1}`}
            className="btn btn--next"
            aria-label="Next Pokemon"
            onMouseOver={() =>
              provider.query({
                query: POKEMON_DETAIL_Q,
                variables: { pokeid: current + 1 }
              })
            }
          >
            # {(current + 1).toString()}
          </Link>
        ) : null}
      </PaginationWrapper>
    );
  }
}

export default Pagination;
