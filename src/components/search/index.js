import React, { Component } from 'react';

class Search extends Component {
  state = {
    filter: '',
    species: []
  };

  render() {
    return (
      <div className="pokedex-search">
        <label htmlFor="search-input">Search Pokedex:</label>
        <input type="text" onChange={e => this.setState({ filter: e.target.value })} id="search-input" />
      </div>
    )
  }
}

export default Search;