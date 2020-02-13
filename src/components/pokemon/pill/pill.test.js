import React from 'react';
import { Pill } from './';

const Type = mount(<Pill label="Grass" />);

describe('<Pill />', () => {
  it('Pill renders', () => {
    expect(Type).toMatchSnapshot();
  });

  it('Pill has the correct value', () => {
    expect(Type.find('li').text()).toEqual('Grass');
  });
});
