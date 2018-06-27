import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sprite } from '../sprite';
import { Card } from './styles';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const id = pokemon.url.match(/([^/]*)\/*$/)[1];

    return (
      <Card>
        <Link to={`/pokedex/pokemon/${id}`} id={id}>
          <Sprite id={id} alt={pokemon.name} />
          <h2>
            {pokemon.name} <span>#{id}</span>
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
