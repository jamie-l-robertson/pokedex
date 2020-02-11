import gql from 'graphql-tag';

const POKEMON_LIST_Q = gql`
 query PokemonList($name: String!, $shiny: BooleanType, $skip: IntType) {
  allPokemons(
    first: 50,
    orderBy: pokeId_ASC, 
    skip: $skip,
    filter: { name: { matches: { pattern: $name } }, 
    shiny: { eq: $shiny }, 
    _status: { eq: published } 
    }) {
    ... on PokemonRecord {
      id
      name
      pokeId
      shiny
      _status
    }
  }
}`;

export default POKEMON_LIST_Q;
