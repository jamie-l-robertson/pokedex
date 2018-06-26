import Styled from 'styled-components';

export const Searchbox = Styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  background-color: #E1371F;
  text-align: center;
  white-space: no-wrap;

  label {
    color: #ffffff;
    margin-right: 5px;
  }

  input[type='text'] {
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    font-size: 16px;
    height: 28px;
    width: 120px;
  }

  button {
    display: inline-block;
    border: 0;
    padding: 5px 10px;
    border-radius: 0 5px 5px 0;
    height: 28px;
    vertical-align: bottom;
    color: #ffffff;
    background-color: black;
    cursor: pointer;
  }
`;
