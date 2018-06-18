import React, { Component } from 'react';
import Loader from '../loader';
import { Link } from 'react-router-dom';

const InitialState = {
  fetched: false,
  loading: false
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
      loading: true
    });

    if (localStorage.getItem(`poke-${id}`)) {
      this.setState(JSON.parse(localStorage.getItem(`poke-${id}`)));
      return;
    }

    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
    .then(json => {
      this.setState({
        poke: json
      });

      fetch(json.types[0].type.url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          type: json
        });

        fetch('https://pokeapi.co/api/v2/pokemon-species/' + id)
        .then(response => response.json())
        .then(json => {
          const description = json.flavor_text_entries.find(x => x.language.name === 'en');
          const alolan = json.varieties.find(p => p.pokemon.name.includes('alola'));
          let alolanSprite;

          if (alolan) {
            id === '25' ? alolanSprite = '25-alola-cap' : alolanSprite = id + '-alola';
          }

          console.log(alolanSprite);

          this.setState({
            species: json,
            description: description.flavor_text,
            alolanForm: alolanSprite,
            loading: true,
            fetched: true
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
       content = <div className="pokemon-detail">
         <Link to='/pokedex' className="btn">&laquo; Back to List</Link>
          <header className="pokemon-header">
            <h2 className="pokemon-detail-heading">{poke.name} - #{poke.id}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="Normal variant"/>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poke.id}.png`} alt="Shiny variant"/>
            {alolanForm ? <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${alolanForm}.png`} alt="Alolan variant"/> : null }
          </header>
          <div className="pokemon-description"><p>{description}</p></div>
          <div className="pokemon-trivia"><p>Generation: {species.generation.name}</p><p>Habitat: {species.habitat.name}</p></div>
          <div className="pokemon-stats-wrapper">
            <h3>Stats:</h3>
            <ul className="pokemon-detail--stats">
              <li>height: {poke.height}(WTF?)</li>
              <li>weight: {poke.weight}lb</li>
            </ul>
         </div>
         <div className="pokemon-types-wrapper">
          <h3>Type:</h3>
          <ul className="pokemon-detail--type">{poke.types.map((t, index) => <li key={t.type.name} className={`pill-${t.type.name}`}>{t.type.name}</li>)}</ul>         
         </div> 
         <div className="pokemon-detail-info-wrapper">
           <div className="pokemon-detail-weak-wrapper">
            <h3>Weak against:</h3>
            <ul className="pokemon-detail--weak">{type.damage_relations.double_damage_from.map((weakness, i) => <li key={weakness.name} className={`pill-${weakness.name}`}>{weakness.name}</li>)}</ul>
          </div>
          <div className="pokemon-detail-strength-wrapper">
            <h3>Strong against:</h3>
            <ul className="pokemon-detail--strong">{type.damage_relations.double_damage_to.map((strength, i) => <li key={strength.name} className={`pill-${strength.name}`}>{strength.name}</li>)}</ul>
          </div>
          <div className="pokemon-detail-special-wrapper">
            <h3>Special Abilities:</h3>
            <ul className="pokemon-detail--abilities">{poke.abilities.map((a, i) => <li key={a.ability.name}>{a.ability.name}</li>)}</ul>
          </div>
        </div>
         <Link to={`/pokedex/pokemon/${poke.id - 1}`} className="btn">&laquo; Previous Pokemon</Link>
         <Link to={`/pokedex/pokemon/${poke.id + 1}`} className="btn btn-right">Next Pokemon &raquo;</Link>
       </div>
    } else if (loading && !fetched) {
      content = <p className="loading">
         <Loader />
          Loading...

      </p>
    } else {
        content = <div/>
    }

    return (
      <div>{content}</div>
    )

  }
}

export default PokemonDetail;