import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const id = pokemon.url.match(/([^/]*)\/*$/)[1];
    
    return (
      <div className="pokemon-species">
        <Link to={`/pokedex/pokemon/${id}`} id={id} className="pokemon-species-link">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="{pokemon.name}" className="pokemon-species-img" />
          <h2 className="pokemon-species-title">{pokemon.name} <span className="pokemon-species-number">#{id}</span></h2>
        </Link>
      </div>
    )
  }
}

export default Pokemon;