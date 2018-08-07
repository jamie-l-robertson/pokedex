import Styled from 'styled-components';

export const Item = Styled.li`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  list-style: none;
  margin: 0 8px 8px 0;
  text-transform: capitalize;
  font-size: 14px;

  &.pill-normal {
    color: #0c0c0c;
    background-color: #eeeeee;
  }
  
  &.pill-electric {
    color: #0c0c0c;
    background-color: yellow;
  }
  
  &.pill-fighting {
    color: #ffffff;
    background-color: brown;
  }
  
  &.pill-psychic {
    color: #ffffff;
    background-color: purple;
  }
  
  &.pill-dark {
    color: #ffffff;
    background-color: grey;
  }
  
  &.pill-ghost {
    color: #ffffff;
    background-color: blueviolet;
  }
  
  &.pill-grass {
    color: #ffffff;
    background-color: green;
  }
  
  &&.pill-fire {
    color: #ffffff;
    background-color: red;
  }
  
  &&.pill-water {
    color: #0c0c0c;
    background-color: aqua;
  }
  
  &&.pill-steel {
    color: #0c0c0c;
    background-color: silver;
  }
  
  &&.pill-fairy {
    color: #ffffff;
    background-color: salmon;
  }
  
  &&.pill-flying {
    color: #0c0c0c;
    background-color: skyblue;
  }
  
  &&.pill-rock {
    color: #0c0c0c;
    background-color: gainsboro;
  }
  
  &&.pill-bug {
    color: #0c0c0c;
    background-color: greenyellow;
  }
  
  &&.pill-ground {
    color: #0c0c0c;
    background-color: burlywood;
  }
  
  &.pill-dragon {
    color: #ffffff;
    background-color: navy;
  }
  
  &.pill-poison {
    color: #ffffff;
    background-color: rgb(92, 0, 128);
  }
  
  &.pill-ice {
    color: #0c0c0c;
    background-color: rgb(137, 236, 253);
  }
  
`;
