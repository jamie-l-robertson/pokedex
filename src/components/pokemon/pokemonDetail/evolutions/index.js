import React from "react";
import { Link } from "react-router-dom";
import { Sprite } from "../../sprite";
import { EvolveWrapper } from "./styles";

export const Evolutions = props => {
  const { evolvements, pokeId, name } = props.data;

  return (
    <React.Fragment>
      {evolvements && evolvements.length ? (
        <EvolveWrapper>
          <h2>Evolutions</h2>
          <ul>
            {evolvements && evolvements.length
              ? evolvements.map((evolvement, i) => (
                  <li key={`evolvement-` + i}>
                    <Link to={`/pokemon/${evolvement.id}`} id={pokeId}>
                      <Sprite id={evolvement.id} />
                      {evolvement.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </EvolveWrapper>
      ) : null}
    </React.Fragment>
  );
};
