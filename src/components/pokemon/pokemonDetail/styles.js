import Styled from 'styled-components';

export const Wrapper = Styled.article`
  display: block;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  .heading {
    text-transform: capitalize;
  }

  .stats-wrapper,
  .types-wrapper,
  .weak-wrapper,
  .strength-wrapper {
    @media (min-width: 640px) {
      display: inline-block;
      width: 50%;
      vertical-align: top;
    }
  }

  .info-wrapper,
  .special-wrapper {
    display: block;
    width: 100%;
    border: 2px solid #eeeeee;
    border-width: 2px 0;
    padding: 20px 0;
    margin: 20px 0 30px;
    clear: both;
  }

  .special-wrapper {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ul:not(.abilities):not(.stats) {
    padding: 0;
  }
`;
