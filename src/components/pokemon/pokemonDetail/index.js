import React from 'react';
import { Query } from 'react-apollo';
import { motion } from 'framer-motion';
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

const PokemonDetail = ({ location }) => {
  const id = parseInt(location.search.split('=').pop(), 10);

  return (
    <React.Fragment>
      <Query query={POKEMON_DETAIL_Q} variables={{ pokeid: id }}>
        {({ loading, error, data, client }) => {

          let content;

          if (loading) {
            content = (
              <motion.div className="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Loader />
              </motion.div>
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


            const gen = data.pokemon ? generation : '';
            const pivs = data.pokemon ? perfectIv.cp : null;
            const evolvements = data.pokemon ? evolutionTable : null;
            const totalPoke = data.allPokemons.length;

            content = (
              <React.Fragment>
                <HeaderControls initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <Link to="/" className="btn">
                    Back to List
                  </Link>
                </HeaderControls>
                <Wrapper initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
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
                    <Stats data={{ weakness, strengths, stats }} />
                    <IvTable data={pivs} title="Perfect IVs by lvl" />
                    <Evolutions data={{ evolvements, pokeId, name }} />
                    <div>
                      {raidBoss ? <p>Active raid boss</p> : null}
                      <p>{evolveCandy ? 'Evolve cost: ' + evolveCandy + ' Candy' : null}</p>
                      <p>{buddyDistance ? 'Buddy candy distance: ' + buddyDistance + ' km' : null}</p>
                    </div>
                  </main>
                </Wrapper>
                <Pagination current={pokeId} provider={client} nextPokeSet={totalPoke} />
              </React.Fragment>
            );
          }

          return <motion.div exit={{ opacity: 0 }}>{content}</motion.div>;
        }}
      </Query>
    </React.Fragment>
  );
}

export default PokemonDetail;
