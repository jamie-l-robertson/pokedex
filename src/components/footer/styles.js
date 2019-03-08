import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: block;
  width: 90%;
  margin: 20px auto 0;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: 600px) {
    width: 100%;
    border-radius: 0;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    color: #636363;
    text-align: center;

    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      color: #e4004d;
    }
  }

  a {
    color: #2774af;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
