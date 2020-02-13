import React from 'react';
import { PillList } from './';

const items = ['Grass', 'Poision'];
const List = mount(<PillList data={items} />);
const ListWithTitle = mount(<PillList data={items} title="Types" />);

describe('<PillList />', () => {
  it('Pill list renders', () => {
    expect(List).toMatchSnapshot();
  });

  it('Has 2 items', () => {
    expect(List.find('li')).toHaveLength(2);
  });

  it('Items are correct', () => {
    expect(List.find('li').get(0).props.children).toEqual('Grass');
  });

  it('Has an optional title', () => {
    expect(ListWithTitle.find('h2').text()).toEqual('Types');
  });
});
