import React, { Component } from 'react';
import Pokemon from '../pokemonCard';
import Loader from '../../loader';
import { Search } from '../../search';
import { List } from './styles';

const InitialState = {
  species: [],
  fetched: false,
  loading: false,
  filter: '',
};

class PokemonList extends Component {
  state = localStorage.getItem('appState') ? JSON.parse(localStorage.getItem('appState')) : InitialState;

  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClear = this.handleInputClear.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      filter: evt.target.value,
    });
  }

  handleInputClear(evt) {
    evt.preventDefault();

    this.setState({
      filter: '',
    });
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });

    fetch('https://pokeapi.co/api/v2/pokemon?limit=385')
      .then(response => response.json())
      .then(json => {
        this.setState({
          species: json.results,
          loading: true,
          fetched: true,
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
    const filtered = species
      .filter(e => e.name.includes(filter.toLowerCase()))
      .map((poke, index) => <Pokemon key={poke.name} pokemon={poke} />);
    let content;

    if (fetched) {
      content = (
        <React.Fragment>
          <Search
            filter={this.state.filter}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
          />
          <List>{filtered}</List>
        </React.Fragment>
      );
    } else if (loading && !fetched) {
      content = (
        <p className="loading">
          <Loader />Loading...
        </p>
      );
    } else {
      content = <div />;
    }

    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default PokemonList;
