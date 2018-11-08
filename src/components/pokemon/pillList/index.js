import React from 'react';
import { Pill } from '../pill';

export const PillList = props => {
  return (
    <React.Fragment>
      {props.title ? <h2>{props.title}</h2> : null}
      <ul>{props.data.map((item, i) => <Pill key={`{item-}` + i} label={item} />)}</ul>
    </React.Fragment>
  );
};
