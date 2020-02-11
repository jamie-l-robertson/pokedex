import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { toIdValue } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';


const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      pokemon: (_, args) => {
        cache.config.dataIdFromObject(object => {
          return {
            __typename: 'PokemonRecord',
            id: object.id
          }
        });
      },
    },
  },
});

// const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(
      headers || {},
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_DATO_TOKEN}`,
      }
    )
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
