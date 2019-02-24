import React, { Component } from "react";
import { Query } from "react-apollo";
import Pokemon from "../pokemonCard";
import Loader from "../../loader";
import { Search } from "../../search";
import { List } from "./styles";

// Queries
import POKEMON_LIST_Q from "../../../thread/queries/getPokeList";

//@TODO: Refactor to use hooks
class PokemonList extends Component {
  state = {
    fetched: false,
    loading: false,
    filter: ""
  };

  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClear = this.handleInputClear.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      filter: evt.target.value
    });
  }

  handleInputClear(evt) {
    evt.preventDefault();

    this.setState({
      filter: ""
    });
  }

  componentDidMount() {
    this.setState({
      loading: true,
      filter: ""
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
          <Query query={POKEMON_LIST_Q} variables={{ name: this.state.filter }}>
            {({ loading, error, data }) => {
              return (
                <React.Fragment>
                  {error ? <div>{error}</div> : null}
                  {loading ? (
                    <div className="loading">
                      <Loader />
                    </div>
                  ) : null}
                  {data.pokemons &&
                    data.pokemons.map(poke =>
                      poke.status === "PUBLISHED" ? (
                        <Pokemon
                          key={`poke-list-${poke.pokeId}`}
                          pokemon={poke}
                        />
                      ) : null
                    )}
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
