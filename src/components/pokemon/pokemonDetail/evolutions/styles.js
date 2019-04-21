import Styled from "styled-components";

export const EvolveWrapper = Styled.div`
  display: block;
  position: relative;
  border-bottom: 2px solid #EEEEEE;
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 15px;

  h2 {
    font-size: 18px;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;

    li {
      text-align: center;
      vertical-align: bottom;
      color: #4d6472;
      position: relative;
      flex: 1 0 auto;
      list-style: none;

      &::after {
        display: block;
        content: "";
        width: 100%;
        height: 3px;
        background-color: #EEEEEE;
        position: absolute;
        left: 50%;
        top: 23px;
        z-index: 1;

        @media (min-width: 600px) {
          top: 48px;
        }
      }

      &:last-child {
        &::after {
          display: none;
        }
      }
    }

    img {
      position: relative;
      z-index: 3;
      display: block;
      width: 46px;
      height: auto;
      margin: 0 auto;
      border-radius: 100%;
      background-color: #EEEEEE;

      @media (min-width: 600px) {
        width: 96px;
      }
    }

    a {
      color: #4d6472;
      text-decoration: none;
    }
  }
`;
