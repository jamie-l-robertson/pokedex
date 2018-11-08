import React from "react";
import { SliderWrapper } from "./styles";

export const Slider = props => {
  const { max } = props;

  function positionHandler(val) {
    const pos = (100 * val) / max;

    return pos > 25 ? pos : 25;
  }

  return (
    <SliderWrapper position={positionHandler(props.value)}>
      {props.label ? <span className="label">{props.label}</span> : null}
      <div className="rail">
        <div className="handle">{props.value}</div>
        <div
          className="fill"
          aria-valuemin="0"
          aria-valuemax={max}
          aria-valuenow={props.value}
          aria-disabled="true"
          aria-label={props.label}
          role="slider"
        />
        <div className="track" />
      </div>
    </SliderWrapper>
  );
};
