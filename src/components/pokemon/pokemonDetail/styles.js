import Styled from 'styled-components';

export const Wrapper = Styled.article`
  display: block;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;

  .pokemon-detail-heading {
    text-transform: capitalize;
  }

  .pokemon-stats-wrapper,
  .pokemon-types-wrapper,
  .pokemon-detail-weak-wrapper,
  .pokemon-detail-strength-wrapper {
    @media (min-width: 640px) {
      display: inline-block;
      width: 50%;
      vertical-align: top;
    }
  }

  .pokemon-detail-info-wrapper,
  .pokemon-detail-special-wrapper {
    display: block;
    width: 100%;
    border: 2px solid #eeeeee;
    border-width: 2px 0;
    padding: 20px 0;
    margin: 20px 0 30px;
    clear: both;
  }

  .pokemon-detail-special-wrapper {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  ul:not(.pokemon-detail--abilities):not(.pokemon-detail--stats) {
    padding: 0;
  }
`;
