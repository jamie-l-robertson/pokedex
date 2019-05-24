import React from 'react';
import Pokemon from './';

const poke = {
  status: 'PUBLISHED',
  pokeId: 1,
  name: 'Bulbasaur',
  rarity: 'Uncommon',
  fleeRate: '10%',
  maxCP: 981,
  maxHP: 83,
  maxAttack: 118,
  maxDefence: 118,
  maxStamina: 90,
  alolanForm: null,
  shinyAvailable: true,
  raidBoss: null,
  perfectIvs: {
    cp: ['13', '132', '280', '420', '560', '701', '841', '911', '981'],
  },
  eggDistance: 2,
  legacyMovesTable: {},
  buddydistance: 3,
  evolveCandy: 25,
  evolvmentTable: {
    evos: [
      {
        name: 'Bulbasaur',
        id: 1,
      },
      {
        name: 'Ivysaur',
        id: 2,
      },
      {
        name: 'Venusaur',
        id: 3,
      },
    ],
  },
  description:
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  shortDescription: 'Seed Pokemon',
  generation: 'Generation_1',
  pokemonType: 'Grass',
  pokemonSecondaryType: 'Poison',
  strengths: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weakness: ['Fire', 'Flying', 'Ice', 'Psychic'],
};

const Card = shallow(<Pokemon pokemon={poke} />);
const Sprite = Card.find('Sprite');

describe('<Pokemon />', () => {
  it('Has a Link', () => {
    expect(Card.find('Link').prop('to')).toEqual('/pokemon?id=1');
  });

  it('Has a title', () => {
    expect(Card.find('h2')).toHaveLength(1);
  });

  it('Has an entry ID(#1)', () => {
    expect(Card.find('h2 > span').text()).toEqual('#1');
  });

  it('Sprite is passed the correct ID (1)', () => {
    expect(Sprite.prop('id')).toEqual(1);
  });

  it('Has a sprite', () => {
    expect(Sprite).toHaveLength(1);
  });

  it('Can Be shiny', () => {
    expect(Card.find('.shiny-icon').length).toEqual(1);
  });
});
