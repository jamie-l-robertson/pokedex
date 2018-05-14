import React, { Component } from 'react';
import Loader from '../loader';
import { Link } from 'react-router-dom';

class PokemonDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      loading: false
    }
  }
  
  componentDidMount() {
    this.setState({ fetched: false });
    this.getData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ fetched: false });
    this.getData(nextProps.match.params.id);
  }

  getData(id) {
    this.setState({
      loading: true
    });

    fetch('http://pokeapi.co/api/v2/pokemon/' + id)
    .then(response => response.json())
    .then(json => {
      this.setState({
        poke: json
      });

      fetch(json.types[0].type.url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          type: json,
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
  }

  render() {
    const { fetched, loading, poke, type } = this.state;
    let content;

    if (fetched) {
       content = <div className="pokemon-detail">
         <Link to='/'>Back</Link>
         <h2>{poke.name} - #{poke.id}</h2>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt="{poke.name}"/>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poke.id}.png`} alt="{poke.name} Shiny variant"/>
         <h3>Stats:</h3>
         <ul>
          <li>height: {poke.height}</li>
          <li>weight: {poke.weight}</li>
         </ul>
         <h3>Type:</h3>
         <ul className="pokemon-detail--type">{poke.types.map((t, index) => <li key={t.type.name}>{t.type.name}</li>)}</ul>
         <h3>Weak against:</h3>
         <ul className="pokemon-detail--weak">{type.damage_relations.double_damage_from.map((weakness, i) => <li key={weakness.name}>{weakness.name}</li>)}</ul>
         <h3>Strong against:</h3>
         <ul className="pokemon-detail--strong">{type.damage_relations.double_damage_to.map((strength, i) => <li key={strength.name}>{strength.name}</li>)}</ul>
         <h3>Also known as:</h3>
         <ul className="pokemon-detail--alt-names">{type.names.map((n, i) => <li key={n.language.name}>{n.name} - Language: {n.language.name}</li>)}</ul>
         <h3>Abilities:</h3>
         <ul className="pokemon-detail--abilities">{poke.abilities.map((a, i) => <li key={a.ability.name}>{a.ability.name}</li>)}</ul>
         <Link to={`/pokemon/${poke.id + 1}`}>Next Pokempn</Link>
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