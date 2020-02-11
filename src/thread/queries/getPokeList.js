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
      id
      pokeId
      name
      rarity
      stats
      raidBoss
      perfectIv
      eggDistance
      legacyMovesTable
      buddyDistance
      evolveCandy
      evolutionTable
      longDescription
      shortDescription
      generation
      pokemonType
      strengths
      weakness
      alolan
      galar
      generation 
      shiny
      _status
      __typename
  }
}`;

export default POKEMON_LIST_Q;
