import React from 'react';
import { DetailDescription } from './';

const props = {
  shortDescription: 'I am short description',
  longDescription: 'I am a long description',
  gen: '1',
};
const wrapper = mount(<DetailDescription data={props} />);

describe('<DetailDescription />', () => {
  it('Detail Description renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('Has a short description', () => {
    expect(wrapper.find('h2').text()).toEqual('I am short description');
  });

  it('Has a long description', () => {
    expect(wrapper.find('h2 + p').text()).toEqual('I am a long description');
  });

  it('Has a region', () => {
    expect(wrapper.find('.region').text()).toEqual('Kanto');
  });
});
