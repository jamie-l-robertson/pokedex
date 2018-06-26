import React from 'react';
import { Searchbox } from './styles';

export const Search = props => {
  return (
    <Searchbox>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search-input">Search Pokedex:</label>
        <input type="text" value={props.filter} onChange={props.handleInputChange} />
        <button onClick={props.handleInputClear}>X</button>
      </form>
    </Searchbox>
  );
};
