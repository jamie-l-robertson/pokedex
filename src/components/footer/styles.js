import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: block;
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: 600px) {
    max-width: 600px;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    text-align: center;

    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      color: #e91e63;
    }
  }

  a {
    color: #2883c2;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
