import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Pokemon from '../pokemonCard';
import Loader from '../../loader';
import { Search } from '../../search';
import { List } from './styles';

const POKEMON_Q = gql`
  query PokemonList($name: String) {
    pokemons(where: { name_contains: $name }) {
      ... on Pokemon {
        name
        pokeId
      }
    }
  }
`;

class PokemonList extends Component {
  state = {
    fetched: false,
    loading: false,
    filter: '',
  };

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

  componentDidMount() {
    this.setState({
      loading: true,
      filter: '',
    });
  }

  render() {
    return (
      <React.Fragment>
        <Search
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
          handleInputClear={this.handleInputClear}
        />
        <List>
          <Query query={POKEMON_Q} variables={{ name: this.state.filter }}>
            {({ loading, error, data }) => {
              return (
                <React.Fragment>
                  {error ? <div>{error}</div> : null}
                  {loading ? (
                    <p className="loading">
                      <Loader />Loading...
                    </p>
                  ) : null}
                  {data.pokemons && data.pokemons.map(poke => <Pokemon key={poke.name} pokemon={poke} />)}
                </React.Fragment>
              );
            }}
          </Query>
        </List>
      </React.Fragment>
    );
  }
}

export default PokemonList;
