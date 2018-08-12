import Styled from "styled-components";

export const DetailHeaderWrapper = Styled.header`
  display: block;
  position: relative;
  border-bottom: 2px solid #EEEEEE;
  overflow: hidden;
  margin-bottom: 20px;
  padding-bottom: 15px;

  > img {
    display: block;
    margin: 0 auto 5px;
    border-radius: 100%;
    background-color: #EEEEEE;

    @media (min-width: 600px) {
      float: left;
      margin: 0;
    }
  }

  .content {
    text-align: center;

    @media (min-width: 600px) {
      padding-left: 112px;
      vertical-align: top;
      text-align: left;
    }
  }

  ul {
    margin: 0 0 2px;
  }

  .icon {
    display: inline;
    font-size: 14px;
    vertical-align: top;
    margin: 0 2px;
    
    &[title] {
      cursor: pointer;
    }

    &--large {
      font-size: 18px;
    }

    &--egg {
      display: none;
      visibility: hidden;

      @media (min-width: 600px) {
        display: block;
        visibility: visible;
        position: absolute;
        bottom: 20px;
        right: 10px;
        margin: 0;
      }
    }
  }

  .rarity {
    display: block;
    font-size: 14px;
  }

  .identifier {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 18px;

    @media (min-width: 600px) {
      font-size: 25px;
    }
  }
`;
