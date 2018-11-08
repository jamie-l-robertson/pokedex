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
    margin-right: 5px;
  }

  input[type='text'] {
    border: 1px solid #EEEEEE;
    padding: 5px 5px;
    font-size: 14px;
    width: 120px;
    border-radius: 20px 0 0 20px;
    height: 34px;
    vertical-align: top;
    -webkit-appearance: none;
  }

  button {
    display: inline-block;
    color: #ffffff;
    margin-right: 10px;
    padding: 5px 15px;
    text-decoration: none;
    background-color: #145959;
    border-radius: 0 20px 20px 0; 
    border: 0;
    height: 34px;
    font-size: 14px;
    cursor: pointer;
  }
`;
