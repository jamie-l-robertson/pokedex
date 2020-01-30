import gql from "graphql-tag";

const POKEMON_DETAIL_Q = gql`
  query PokemonDetail($pokeid: IntType) {
    pokemon(filter: {pokeId: { eq: $pokeid }}) {
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
    }
    # pokemonsConnection(where: { status: PUBLISHED }) {
    #   aggregate {
    #     count
    #   }
    # }
  }
`;

export default POKEMON_DETAIL_Q;
