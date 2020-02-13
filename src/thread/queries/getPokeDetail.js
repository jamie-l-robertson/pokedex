import gql from "graphql-tag";

const POKEMON_DETAIL_Q = gql`
  query PokemonDetail($pokeid: IntType) {
    pokemon(filter: {pokeId: { eq: $pokeid }}) {
     ... on PokemonRecord {
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
      __typename
     }
    }
    allPokemons(skip: $pokeid, filter: {_status: {eq: published}}, orderBy: pokeId_ASC) {
      pokeId
    }
  }
`;

export default POKEMON_DETAIL_Q;
