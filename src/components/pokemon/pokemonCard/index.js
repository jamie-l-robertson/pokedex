import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { useSpring } from 'react-spring';
import { Sprite } from '../sprite';
import { Card, StyledIcon } from './styles';

const Pokemon = ({ pokemon }) => {
  const springs = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1 });
    },
    from: { opacity: 0 },
  });


  return (
    <Card style={springs}>
      <Link to={`/pokemon?id=${pokemon.pokeId}`} id={pokemon.pokeId}>
        <LazyLoad key={pokemon.pokeId} width="130" height={130} offset={100}>
          <Sprite id={pokemon.pokeId} alt={pokemon.name} />
        </LazyLoad>
        <h2>
          {pokemon.name} <span>#{pokemon.pokeId}</span>
        </h2>
        {pokemon.shiny ? (
          <StyledIcon className="shiny-icon" role="img" title="Shiny available" aria-label="Shiny available">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                fill="#F4DF19"
                d="M24.5 0l7.1 16.4 16.2 7.5-16.3 7.4-7 16.5-7.4-16.5-16-7.4 16.1-7.6zM42.2 52.2l7.2 16.4 16.2 7.5-16.3 7.4-7.1 16.5-7.3-16.5-16-7.4 16-7.6zM74.5 16.7l7.1 16.4 16.2 7.5L81.5 48l-7 16.4L67.1 48l-16-7.4L67.2 33z"
              />
            </svg>
          </StyledIcon>
        ) : null}
      </Link>
    </Card>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
