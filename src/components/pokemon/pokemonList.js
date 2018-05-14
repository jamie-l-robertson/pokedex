import React, { Component } from 'react';
import Pokemon from './pokemon';
import Loader from '../loader';

class PokemonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: [],
      fetched: false,
      loading: false
    }
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch('http://pokeapi.co/api/v2/pokemon?limit=385')
    .then(response => response.json())
    .then(json => {
      this.setState({
        species: json.results,
        loading: true,
        fetched: true
      });
    })
    .catch(error => {
      console.log(error);
    });  
  }

  render() {
    const { fetched, loading, species } = this.state;
    let content;
    
    if (fetched) {
        content = <div className="pokemon-list">{species.map((pokemon, index) => <Pokemon key={pokemon.name} id={index+1} pokemon={pokemon} />)}</div>
    } else if (loading && !fetched) {
        content = <p className="loading">
          <Loader />
          Loading...
          </p>
    } else {
        content = <div/>
    }
    return (
        <div>
            {content}
        </div>
    )
  }
 }

 export default PokemonList;