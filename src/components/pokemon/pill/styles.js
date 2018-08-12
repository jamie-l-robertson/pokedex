import Styled from "styled-components";

export const Item = Styled.li`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  list-style: none;
  margin: 0 8px 8px 0;
  text-transform: capitalize;
  font-size: 14px;

  &.pill-normal {
    color: #FFFFFF;
    background-color: #4A4A4A;
  }
  
  &.pill-electric {
    color: #FFFFFF;
    background-color: #FFC107;
  }
  
  &.pill-fighting {
    color: #ffffff;
    background-color: #F44336;
  }
  
  &.pill-psychic {
    color: #ffffff;
    background-color: #9C27B0;
  }
  
  &.pill-dark {
    color: #ffffff;
    background-color: #263238;
  }
  
  &.pill-ghost {
    color: #ffffff;
    background-color: #E2E2E2;
  }
  
  &.pill-grass {
    color: #ffffff;
    background-color: #4CAF50;
  }
  
  &&.pill-fire {
    color: #ffffff;
    background-color: #FF5722;
  }
  
  &&.pill-water {
    color: #FFFFFF;
    background-color: #2196F3;
  }
  
  &&.pill-steel {
    color: #FFFFFF;
    background-color: #607D8B;
  }
  
  &&.pill-fairy {
    color: #ffffff;
    background-color: #E91E63;
  }
  
  &&.pill-flying {
    color: #FFFFFF;
    background-color: #2962FF;
  }
  
  &&.pill-rock {
    color: #FFFFFF;
    background-color: #9E9E9E;
  }
  
  &&.pill-bug {
    color: #FFFFFF;
    background-color: #009688;
  }
  
  &&.pill-ground {
    color: #FFFFFF;
    background-color: #795548;
  }
  
  &.pill-dragon {
    color: #ffffff;
    background-color: #5C6BC0;
  }
  
  &.pill-poison {
    color: #ffffff;
    background-color: #21D0A9;
  }
  
  &.pill-ice {
    color: #FFFFFF;
    background-color: #81D4FA;
  }
  
`;
