import gql from "graphql-tag";

const POKEMON_DETAIL_Q = gql`
  query PokemonDetail($pokeid: [Int!]) {
    pokemons(where: { pokeId_in: $pokeid }) {
      ... on Pokemon {
        status
        pokeId
        name
        rarity
        fleeRate
        maxCP
        maxHP
        maxAttack
        maxDefence
        maxStamina
        alolanForm
        shinyAvailable
        raidBoss
        perfectIvs
        eggDistance
        legacyMovesTable
        buddydistance
        evolveCandy
        evolvmentTable
        description
        shortDescription
        generation
        pokemonType
        pokemonSecondaryType
        strengths
        weakness
      }
    }
    pokemonsConnection(where: { status: PUBLISHED }) {
      aggregate {
        count
      }
    }
  }
`;

export default POKEMON_DETAIL_Q;
