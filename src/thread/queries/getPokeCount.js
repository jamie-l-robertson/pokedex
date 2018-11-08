import gql from "graphql-tag";

const POKEMON_COUNT_Q = gql`
  {
    pokemonsConnection {
      aggregate {
        count
      }
    }
  }
`;

export default POKEMON_COUNT_Q;
