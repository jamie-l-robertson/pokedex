import gql from 'graphql-tag';

const POKEMON_LIST_Q = gql`
 query PokemonList($name: String!, $shiny: BooleanType) {
  allPokemons(
    orderBy: pokeId_ASC, 
    filter: { name: { matches: { pattern: $name } }, 
    shiny: { eq: $shiny }, 
    _status: { eq: published } 
    }) {
    ... on PokemonRecord {
      name
      pokeId
      shiny
      _status
    }
  }
}`;

export default POKEMON_LIST_Q;
