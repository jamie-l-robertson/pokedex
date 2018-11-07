import React from "react";

export const Egg = props => {
  const { distance } = props;
  let color;

  switch (distance) {
    case 2:
      color = "#74DD6F";
      break;
    case 5:
      color = "#DDA812";
      break;

    case 10:
      color = "#5802BA";
      break;
    default:
      color = "#145959";
  }

  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>Egg hatches after {distance}km</title>
        <g fill={color}>
          <path d="M14.2 36.5c5.1 1.5 13.8 9.7 14 19 .2 9.4-4.2 15.5-11.9 19.4-6.6-13-6.9-25.2-2.1-38.4zM49.4 27.8C39.1 22.5 37.5 9 46.5 4.1 57.6.8 70.3 10.3 74.9 17.7c1.8 8.4-15.2 15.4-25.5 10.1zM77 54.7c4.4 10.4.4 21.1-9 26.5-9.3 5.4-22.3 1.7-26.6-8.8-4.3-10.5.6-21.6 10.2-25.8s21-2.3 25.4 8.1z" />
        </g>
        <path
          fill="none"
          stroke={color}
          strokeWidth="5"
          d="M11 53.1C10.6 74 26.3 92.6 43.4 94.9c17.1 2.3 38.8-8.7 44.3-30.6C93.2 42.4 73.9 3 51.2 3.6 28.5 4.2 11.3 32.2 11 53.1z"
        />
      </svg>
    </React.Fragment>
  );
};
