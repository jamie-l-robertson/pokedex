import React from 'react';
import { Query } from 'react-apollo';
import Loader from '../../loader';
import Pagination from '../pagination';
import { Link } from 'react-router-dom';
import DetailHeader from './detailHeader';
import { DetailDescription } from './detailDescription';
import { Stats } from './stats';
import { IvTable } from './ivTable';
import { Evolutions } from './evolutions';
import { Wrapper, HeaderControls } from './styles';

// QUERIES
import POKEMON_DETAIL_Q from '../../../thread/queries/getPokeDetail';

function PokemonDetail({ location }) {
  const id = parseInt(location.search.split('=').pop(), 10);

  return (
    <React.Fragment>
      <Query query={POKEMON_DETAIL_Q} variables={{ pokeid: id }}>
        {({ loading, error, data, client }) => {
          let content;

          if (loading) {
            content = (
              <Wrapper>
                <div className="loading">
                  <Loader />
                </div>
              </Wrapper>
            );
          } else if (error) {
            content = (
              <Wrapper>
                <div>{error}</div>
              </Wrapper>
            );
          } else {

            const {
              pokeId,
              name,
              rarity,
              stats,
              raidBoss,
              perfectIv,
              eggDistance,
              legacyMovesTable,
              buddyDistance,
              evolveCandy,
              evolutionTable,
              longDescription,
              shortDescription,
              generation,
              pokemonType,
              strengths,
              weakness,
              alolan,
              galar,
              shiny,
            } = data && data.pokemon ? data.pokemon : {};

            console.log(data)

            const gen = data.pokemon ? generation : '';
            const pivs = data.pokemon ? perfectIv.cp : null;
            const legacy = data.pokemon ? legacyMovesTable : null;
            const evolvements = data.pokemon ? evolutionTable : null;
            const connectionData = data.pokemonsConnection && data.pokemonsConnection.aggregate;
            const totalPoke = (connectionData && connectionData.count) || 251;

            content = (
              <React.Fragment>
                <HeaderControls>
                  <Link to="/" className="btn">
                    Back to List
                  </Link>
                </HeaderControls>
                <Wrapper>
                  <main>
                    <DetailHeader
                      data={{
                        name,
                        pokeId,
                        shiny,
                        pokemonType,
                        alolan,
                        eggDistance,
                        rarity,
                      }}
                    />
                    <DetailDescription data={{ shortDescription, longDescription, gen }} />
                    <Stats
                      data={{
                        weakness,
                        strengths,
                        stats,
                      }}
                    />
                    <IvTable data={pivs} title="Perfect IVs by lvl" />
                    <Evolutions data={{ evolvements, pokeId, name }} />
                    <div>
                      <ul>
                        {legacy && legacy.length ? legacy.map((leg, i) => <li key={`legacy-` + i}>{leg}</li>) : null}
                      </ul>

                      {raidBoss ? <p>Active raid boss</p> : null}
                      <p>{evolveCandy ? 'Evolve cost: ' + evolveCandy + ' Candy' : null}</p>
                      <p>{buddyDistance ? 'Buddy candy distance: ' + buddyDistance + ' km' : null}</p>
                    </div>
                  </main>
                </Wrapper>
                {/* <Pagination current={pokeId} provider={client} totalPoke={totalPoke} /> */}
              </React.Fragment>
            );
          }

          return content;
        }}
      </Query>
    </React.Fragment>
  );
}

export default PokemonDetail;
