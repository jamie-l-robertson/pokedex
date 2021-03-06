import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PokemonList from './components/pokemon/pokemonList/';
import PokemonDetail from './components/pokemon/pokemonDetail/';
import NotFound from './components/notFound';
import { Footer } from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <Router>
          <React.Fragment>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={PokemonList} />
                <Route name="pokemon" path="/pokemon" component={PokemonDetail} />
                <Route path="*" component={NotFound} />
              </Switch>
            </AnimatePresence>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
