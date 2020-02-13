import React from 'react';
import { Slider } from '../../slider';
import { PillList } from '../../pillList';
import { StatsWrapper } from './styles';

export const Stats = props => {
  const { weakness, strengths, stats } = props.data;

  // @TODO - move max values to constants file
  return (
    <StatsWrapper>
      <div className="factors">
        {weakness ? <PillList data={weakness} title="Weakness" /> : null}
        {strengths ? <PillList data={strengths} title="Strengths" /> : null}
      </div>
      <div className="stat-range">
        <Slider value={stats.cp} max={4955} label="Max CP" />
        <Slider value={stats.attack} max={345} label="Max Attack" />
        <Slider value={stats.defense} max={396} label="Max Defense" />
        <Slider value={stats.hp} max={4955} label="Max HP" />
        <Slider value={stats.stamina} max={510} label="Max Stamina" />
      </div>
    </StatsWrapper>
  );
};
