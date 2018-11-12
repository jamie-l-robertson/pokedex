import React from "react";
import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Built by{" "}
        <a
          href="https://www.linkedin.com/in/jamie-robertson-8b75905b/"
        >
          Jamie Robertson
        </a>{" "}
        with{" "}
        <a href="https://reactjs.org">
          React
        </a>{" "}
        and <span>♥</span>.
      </p>
      <p>
        Content managed by{" "}
        <a href="https://graphcms.com">
          GraqhCMS
        </a>
        , images provided by{" "}
        <a href="https://github.com/ZeChrales/PogoAssets">
          PogoAssets
        </a>
      </p>
      <p>
        View project on <a href="https://github.com/ru7hl355/pokedex">Github</a>
      </p>
    </StyledFooter>
  );
};
