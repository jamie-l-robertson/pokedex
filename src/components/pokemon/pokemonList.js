import React, { Component } from 'react';
import Pokemon from './pokemon';
import Loader from '../loader';

const InitialState = {
  species: [],
  fetched: false,
  loading: false,
  filter: ''
};

class PokemonList extends Component {
  state = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : InitialState;

  componentWillMount() {
    this.setState({
      loading: true
    }); 

    fetch('https://pokeapi.co/api/v2/pokemon?limit=385')
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

  componentWillUnmount() {
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  render() {
    const { fetched, loading, species, filter } = this.state;
    const filtered = species.filter(e => e.name.includes(filter.toLowerCase())).map(((p, index) => <Pokemon key={p.name} pokemon={p} />));
    let content;
    
    if (fetched) {
        content = 
          <div>
          <div className="pokedex-search">
            <label htmlFor="search-input">Search Pokedex:</label>
            <input type="text" value={filter} onChange={e => this.setState({ filter: e.target.value })} id="search-input" />
            <button onClick={() => this.setState({ filter: '' })}>X</button>
          </div>
            <div className="pokemon-list">{filtered}</div>
          </div>

    } else if (loading && !fetched) {
        content = <p className="loading"><Loader />Loading...</p>
    } else {
        content = <div/>
    }

    return (<div>{content}</div>);
  }
 }

 export default PokemonList;