import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { forceCheck } from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroller';
import { motion } from 'framer-motion';
import Pokemon from '../pokemonCard';
import Loader from '../../loader';
import { Search } from '../../search';
import { List } from './styles';

// Queries
import POKEMON_LIST_Q from '../../../thread/queries/getPokeList';

//@TODO: Refactor to use hooks
class PokemonList extends Component {
  state = {
    fetched: false,
    loading: false,
    filter: '',
    cursor: 0
  };

  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputClear = this.handleInputClear.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      filter: evt.target.value === 'shiny' ? 'shiny' : evt.target.value,
    });
  }

  handleInputClear(evt) {
    evt.preventDefault();

    this.setState({
      filter: '',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      //Give the images a nudge incase they dont load, TODO: find a better way
      setTimeout(() => forceCheck(), 200);
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
      filter: '',
      hasMore: true
    });
  }

  render() {
    let searchVars = {};
    this.state.filter === 'shiny' ? (searchVars.shiny = true) : (searchVars.name = this.state.filter);

    return (
      <React.Fragment>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Search
            filter={this.state.filter}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
          />
          <main>
            <List>
              <Query
                query={POKEMON_LIST_Q} key="list-query" variables={searchVars}>
                {({ loading, error, data, fetchMore }) => {
                  return (
                    <React.Fragment>
                      {error ? <div>{error}</div> : null}
                      {loading ? (
                        <div className="loading">
                          <Loader />
                        </div>
                      ) : null}
                      {data && data.allPokemons && (

                        <InfiniteScroll
                          pageStart={0}
                          threshold={960}
                          loadMore={() => {
                            fetchMore({
                              variables: {
                                skip: data.allPokemons.length,
                              },
                              fetchPolicy: "cache-and-network",
                              updateQuery: (previousResult, { fetchMoreResult }) => {

                                if (!fetchMoreResult.allPokemons.length) {
                                  this.setState({ hasMore: false });
                                  return previousResult
                                };

                                const data = Object.assign(
                                  {}, previousResult, {
                                  allPokemons: [
                                    ...previousResult.allPokemons,
                                    ...fetchMoreResult.allPokemons
                                  ]
                                }
                                );

                                return data;
                              }
                            });
                          }}
                          hasMore={this.state.hasMore}>
                          {data.allPokemons.map(poke => <Pokemon key={`poke-list-${poke.id}`} pokemon={poke} />)}
                        </InfiniteScroll>
                      )}

                    </React.Fragment>
                  );
                }}
              </Query>
            </List>
          </main>
        </motion.div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
