import React from "react";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/jamie-robertson-8b75905b/"
          target="_BLANK"
        >
          Jamie Robertson
        </a>{" "}
        with{" "}
        <a href="https://reactjs.org" target="_BLANK">
          React
        </a>{" "}
        and <span>♥</span>.
      </p>
      <p>
        Content managed by{" "}
        <a href="https://graphcms.com" target="_BLANK">
          GraqhCMS
        </a>
        , images provided by{" "}
        <a href="https://github.com/ZeChrales/PogoAssets" target="_BLANK">
          PogoAssets
        </a>
      </p>
      <p>
        View project on <a href="https://github.com/ru7hl355/pokedex">Github</a>
      </p>
    </StyledFooter>
  );
};
