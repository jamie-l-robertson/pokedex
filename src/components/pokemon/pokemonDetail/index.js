import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../loader';
import { Link } from 'react-router-dom';
import { Sprite } from '../sprite';
import { Wrapper } from './styles';

const InitialState = {
  fetched: false,
  loading: false,
};

class PokemonDetail extends Component {
  state = InitialState;

  componentDidMount() {
    this.setState({ fetched: false });
    this.getData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    localStorage.setItem(`poke-${this.props.match.params.id}`, JSON.stringify(this.state));
    this.setState({ fetched: false });
    this.getData(nextProps.match.params.id);
  }

  componentWillUnmount() {
    localStorage.setItem(`poke-${this.props.match.params.id}`, JSON.stringify(this.state));
  }

  getData(id) {
    this.setState({
      loading: true,
    });

    if (localStorage.getItem(`poke-${id}`)) {
      this.setState(JSON.parse(localStorage.getItem(`poke-${id}`)));
      return;
    }

    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({
          poke: json,
        });

        fetch(json.types[0].type.url)
          .then(response => response.json())
          .then(json => {
            this.setState({
              type: json,
            });

            fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
              .then(response => response.json())
              .then(json => {
                const description = json.flavor_text_entries.find(x => x.language.name === 'en');
                const alolan = json.varieties.find(p => p.pokemon.name.includes('alola'));
                let alolanSprite;

                if (alolan) {
                  id === '25' ? (alolanSprite = '25-alola-cap') : (alolanSprite = id + '-alola');
                }

                this.setState({
                  species: json,
                  description: description.flavor_text,
                  alolanForm: alolanSprite,
                  loading: true,
                  fetched: true,
                });
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { fetched, loading, poke, type, species, description, alolanForm } = this.state;
    let content;

    if (fetched) {
      content = (
        <Wrapper>
          <Link to="/pokedex" className="btn">
            &laquo; Back to List
          </Link>
          <header>
            <h2 className="heading">
              {poke.name} - #{poke.id}
            </h2>
            <Sprite id={poke.id} alt="Normal variant" showShiny alolan={alolanForm ? alolanForm : null} />
          </header>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="trivia">
            <p>Generation: {species.generation.name}</p>
            <p>Habitat: {species.habitat.name}</p>
          </div>
          <div className="stats-wrapper">
            <h3>Stats:</h3>
            <ul className="stats">
              <li>height: {poke.height}(WTF?)</li>
              <li>weight: {poke.weight}lb</li>
            </ul>
          </div>
          <div className="types-wrapper">
            <h3>Type:</h3>
            <ul className="type">
              {poke.types.map((t, index) => (
                <li key={t.type.name} className={`pill-${t.type.name}`}>
                  {t.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-wrapper">
            <div className="weak-wrapper">
              <h3>Weak against:</h3>
              <ul className="weak">
                {type.damage_relations.double_damage_from.map((weakness, i) => (
                  <li key={weakness.name} className={`pill-${weakness.name}`}>
                    {weakness.name}
                  </li>
                ))}
              </ul>
            </div>
            {type.damage_relations.double_damage_to.length > 0 ? (
              <div className="strength-wrapper">
                <h3>Strong against:</h3>
                <ul className="strong">
                  {type.damage_relations.double_damage_to.map((strength, i) => (
                    <li key={strength.name} className={`pill-${strength.name}`}>
                      {strength.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="special-wrapper">
              <h3>Special Abilities:</h3>
              <ul className="abilities">
                {poke.abilities.map((a, i) => <li key={a.ability.name}>{a.ability.name}</li>)}
              </ul>
            </div>
          </div>
          <Link to={`/pokedex/pokemon/${poke.id - 1}`} className="btn">
            &laquo; Previous Pokemon
          </Link>
          <Link to={`/pokedex/pokemon/${poke.id + 1}`} className="btn btn-right">
            Next Pokemon &raquo;
          </Link>
        </Wrapper>
      );
    } else if (loading && !fetched) {
      content = (
        <p className="loading">
          <Loader />
          Loading...
        </p>
      );
    } else {
      content = <div />;
    }

    return <React.Fragment>{content}</React.Fragment>;
  }
}

PokemonDetail.propTypes = {
  id: PropTypes.string,
};

export default PokemonDetail;
