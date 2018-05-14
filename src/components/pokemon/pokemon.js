import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    const { pokemon, id } = this.props;
    
    return (
      <div className="pokemon-species">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="{pokemon.name}"/>
        <h2 className="pokemon-species-title">{pokemon.name} - #{id}</h2>
        <Link to={`/pokemon/${id}`} id={id}>Details</Link>
      </div>
    )
  }
}

export default Pokemon;