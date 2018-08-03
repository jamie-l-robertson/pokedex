import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Loader from '../../loader';
import { Pagination } from '../pagination';
import { Link } from 'react-router-dom';
import { Sprite } from '../sprite';
import { PillList } from '../pillList';
import { Wrapper } from './styles';

// QUERIES
import POKEMON_DETAIL_Q from '../../../thread/queries/getPokeDetail';

class PokemonDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <Query query={POKEMON_DETAIL_Q} variables={{ pokeid: this.props.match.params.id }}>
          {({ loading, error, data }) => {
            const {
              pokeId,
              name,
              rarity,
              fleeRate,
              maxCP,
              maxHP,
              maxAttack,
              maxDefence,
              maxStamina,
              alolanForm,
              shinyAvailable,
              raidBoss,
              perfectIvs,
              eggDistance,
              legacyMovesTable,
              buddydistance,
              evolveCandy,
              evolvmentTable,
              description,
              shortDescription,
              generation,
              pokemonType,
              pokemonSecondaryType,
              strengths,
              weakness,
            } =
              data.pokemons && data.pokemons[0] ? data.pokemons[0] : {};

            const gen = data.pokemons && data.pokemons[0] ? generation.split('_').pop() : '';
            const pivs = data.pokemons && data.pokemons[0] ? perfectIvs.cp : null;
            const legacy = data.pokemons && data.pokemons[0] ? legacyMovesTable : null;
            const evolvements = data.pokemons && data.pokemons[0] ? evolvmentTable.evos : null;
            const types = [];

            data.pokemons && data.pokemons[0] ? types.push(pokemonType) : null;
            data.pokemons && data.pokemons[0]
              ? pokemonSecondaryType != undefined
                ? types.push(pokemonSecondaryType)
                : null
              : null;

            return (
              <React.Fragment>
                {error ? <div>{error}</div> : null}
                {loading ? (
                  <p className="loading">
                    <Loader />Loading...
                  </p>
                ) : null}
                <Link to="/pokedex" className="btn">
                  &laquo; Back to List
                </Link>
                <Wrapper>
                  <header>
                    <h1>
                      {name} - #{pokeId} {shinyAvailable ? '***' : null}
                    </h1>
                    <Sprite id={pokeId} alt="Normal variant" />
                    {types ? <PillList data={types} /> : null}
                  </header>
                  <div>
                    <h2>{shortDescription}</h2>
                    <p>{description}</p>
                    <p>Generation: {gen}</p>
                    {weakness ? <PillList data={weakness} title="Weakness" /> : null}
                    {strengths ? <PillList data={strengths} title="Strengths" /> : null}
                    <p>Rarity: {rarity}</p>
                    <p>Flee Rate: {fleeRate}</p>
                    <p>Max CP: {maxCP}</p>
                    <p>Max HP: {maxHP}</p>
                    <p>Max Stamina: {maxStamina}</p>
                    <p>Max Attack: {maxAttack}</p>
                    <p>Max Defense: {maxDefence}</p>
                    {alolanForm ? <p>Alolan form available</p> : null}
                    {raidBoss ? <p>Active raid boss</p> : null}
                    <h3>Perfect IVs</h3>
                    <ul>
                      {pivs && pivs.length ? (
                        pivs.map((iv, i) => <li key={`iv-` + i}>{iv}</li>)
                      ) : (
                        <li>Loading IVs...</li>
                      )}
                    </ul>
                    <p>{eggDistance ? 'Hatches from: ' + eggDistance + 'km' : 'Doesnt hatch from an egg'}</p>
                    <p>{evolveCandy ? 'Evolve cost: ' + evolveCandy + ' Candy' : 'Doesnt evolve'}</p>
                    <p>{buddydistance ? 'Buddy candy distance: ' + buddydistance + ' km' : null}</p>
                    <ul>
                      {legacy && legacy.length ? legacy.map((leg, i) => <li key={`legacy-` + i}>{leg}</li>) : null}
                    </ul>

                    {evolvements && evolvements.length ? (
                      <ul>
                        <li>
                          <Sprite id={pokeId} />
                          {name} - #{pokeId};
                        </li>
                        {evolvements && evolvements.length
                          ? evolvements.map((evolvement, i) => (
                              <li key={`evolvement-` + i}>
                                <Sprite id={evolvement.id} />
                                {evolvement.name} #{evolvement.id}
                              </li>
                            ))
                          : null}
                      </ul>
                    ) : null}
                  </div>
                </Wrapper>
                <Pagination current={pokeId} />
              </React.Fragment>
            );
          }}
        </Query>
      </React.Fragment>
    );
  }
}

export default PokemonDetail;
