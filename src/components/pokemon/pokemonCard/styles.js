import Styled from 'styled-components';
import { animated } from 'react-spring';

export const Card = Styled(animated.article)`
  display: inline-block;
  position: relative;
  margin: 10px;
  padding: 10px;
  min-width: 120px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  @media(min-width:768px) {
    min-width: 150px;
  }

  &:hover {
    outline: 3px solid #145959;

    img {
      transition: 0.15s ease-in-out;
      transform: scale(1.1); 
    }
  }

  img {
    display: block;
    position: relative;
    z-index: 2;
    max-width: 130px;
  }

  h2 {
    font-size: 16px;
    margin: 0 0 10px;
    text-transform: capitalize;

    span {
      position: absolute;
      top: 5px;
      right: 5px;
      z-index: 2;
      font-size: 20px;
      background-color: rgba(255,255,255,0.7);
      border-radius: 40px;
      padding: 0 10px;
    }
  }

  a {
    display: block;
    width: 130px;
    text-decoration: none;
  }
`;

export const StyledIcon = Styled.span`
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
  padding: 3px;
  border-radius: 40px;
  background-color: rgba(255,255,255,0.7);
`;
