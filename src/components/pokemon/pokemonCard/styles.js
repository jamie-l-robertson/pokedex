import Styled from 'styled-components';

export const Card = Styled.article`
  display: inline-block;
  position: relative;
  margin: 10px;
  padding: 10px;
  min-width: 120px;
  background-color: #EEEEEE;
  text-align: center;
  border-radius: 3px;

  @media(min-width:768px) {
    min-width: 150px;
  }

  &:hover {
    outline: 3px solid #E1371F;
  }

  img {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 16px;
    margin: 0 0 10px;
    text-transform: capitalize;
    color: #0C0C0C;

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
      color: #CCCCCC;
      font-size: 20px;
    }
  }

  a {
    text-decoration: none;
  }
`;
