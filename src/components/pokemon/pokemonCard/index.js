import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Sprite } from "../sprite";
import { Card } from "./styles";

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props;

    return (
      <Card>
        <Link to={`/pokemon?id=${pokemon.pokeId}`} id={pokemon.pokeId}>
          <Sprite id={pokemon.pokeId} alt={pokemon.name} />
          <h2>
            {pokemon.name} <span>#{pokemon.pokeId}</span>
          </h2>
        </Link>
      </Card>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default Pokemon;
