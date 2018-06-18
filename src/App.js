import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from './components/pokemon/pokemonList';
import PokemonDetail from './components/pokemon/pokemonDetail';
import NotFound from './components/notFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <Router>
          <div>
            <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={PokemonList} />
            <Route exact path="/pokedex/pokemon/:id" component={PokemonDetail} />
            <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
