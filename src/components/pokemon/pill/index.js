import React from 'react';
import { Item } from './styles';

export const Pill = props => props.label && <Item className={`pill-` + props.label.toLowerCase()}>{props.label}</Item>;
