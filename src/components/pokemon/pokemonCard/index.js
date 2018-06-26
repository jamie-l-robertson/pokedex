import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from './styles';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const id = pokemon.url.match(/([^/]*)\/*$/)[1];

    return (
      <Card>
        <Link to={`/pokedex/pokemon/${id}`} id={id} className="pokemon-link">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="{pokemon.name}"
            className="pokemon-img"
          />
          <h2 className="pokemon-title">
            {pokemon.name} <span className="pokemon-number">#{id}</span>
          </h2>
        </Link>
      </Card>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
