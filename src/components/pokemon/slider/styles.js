import Styled, { css } from 'styled-components';

export const SliderWrapper = Styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;

  .label {
    display: block;
    font-weight: 700;
    flex: 1 0 auto;
    padding-right: 10px;
    width: 100px;
    color: #4d6472;
  }

  .rail {
    position: relative;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    padding: 2px 0;
    flex: 1 1 auto;
  }

  .handle {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 50px;
    height: 20px;
    background-color: #FFF;
    transition: left 300ms ease;
    will-change: position;
    text-align: center;
    font-size: 12px;
    padding: 2px 0;
    border-radius: 10px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    ${props =>
      props.position &&
      css`
        left: calc(${props.position}% - 50px);
      `};
  }

  .fill {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 16px;
    background: #80edc3;
    transition: width 300ms ease;
    border-radius: 16px;
    ${props =>
      props.position &&
      css`
        width: ${props.position}%;
      `};
  }

  .track {
    width: 100%;
    height: 16px;
    background-color: #EEE;
    border-radius: 10px;
  }
`;
