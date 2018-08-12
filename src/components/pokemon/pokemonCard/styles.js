import Styled from "styled-components";

export const Card = Styled.article`
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
  }

  img {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 16px;
    margin: 0 0 10px;
    text-transform: capitalize;

    span {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 1;
      font-size: 20px;
    }
  }

  a {
    text-decoration: none;
  }
`;
