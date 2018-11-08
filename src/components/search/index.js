import React from "react";
import { Searchbox } from "./styles";

export const Search = props => {
  return (
    <Searchbox>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search-input">Search</label>
        <input
          type="text"
          value={props.filter}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleInputClear}>Clear</button>
      </form>
    </Searchbox>
  );
};
