import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { toIdValue } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import './index.css';
import App from './App';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      pokemons: (_, args) => {
        const id = args.where.pokeId_in;
        toIdValue(cache.config.dataIdFromObject({ __typename: 'Pokemon', pokeId_in: id }));
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache,
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
