import React from 'react';
import { Footer } from './';

const wrapper = mount(<Footer />);

describe('<Footer />', () => {
  it('Renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Has the correct page Landmark', () => {
    expect(wrapper.find('footer')).toHaveLength(1);
  });
});
