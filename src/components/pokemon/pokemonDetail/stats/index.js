import React from 'react';
import { Slider } from '../../slider';
import { PillList } from '../../pillList';
import { StatsWrapper } from './styles';

export const Stats = props => {
  const { weakness, strengths, maxCP, maxAttack, maxStamina, maxDefence } = props.data;

  // @TODO - move max values to constants file
  return (
    <StatsWrapper>
      <div className="factors">
        {weakness ? <PillList data={weakness} title="Weakness" /> : null}
        {strengths ? <PillList data={strengths} title="Strengths" /> : null}
      </div>
      <div className="stat-range">
        <Slider value={maxCP} max={4955} label="Max CP" />
        <Slider value={maxStamina} max={510} label="Max HP" />
        <Slider value={maxAttack} max={345} label="Max Attack" />
        <Slider value={maxDefence} max={396} label="Max Defense" />
      </div>
    </StatsWrapper>
  );
};
