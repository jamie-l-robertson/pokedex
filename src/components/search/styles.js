import Styled from 'styled-components';

export const Searchbox = Styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  background-color: #FFFFFF;
  text-align: center;
  white-space: no-wrap;
  border-bottom: 1px solid #EEEEEE;

  label {
    color: #0C0C0C;
    margin-right: 5px;
  }

  input[type='text'] {
    border: 1px solid #EEEEEE;
    padding: 5px;
    font-size: 16px;
    height: 28px;
    width: 120px;
  }

  button {
    display: inline-block;
    border: 0;
    padding: 5px 10px;
    height: 28px;
    vertical-align: bottom;
    color: #0C0C0C;
    background-color: #CCCCCC;
    cursor: pointer;
  }
`;
