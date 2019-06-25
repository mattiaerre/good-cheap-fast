import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('match snapshot', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('click good', () => {
  const wrapper = shallow(<App />);
  const good = wrapper.find('.label__switch').first();
  expect(wrapper.state().good).toBe(false);

  good.simulate('change');

  expect(wrapper.state().good).toBe(true);
});

test('click cheap', () => {
  const wrapper = shallow(<App />);
  const good = wrapper.find('.label__switch').at(1);
  expect(wrapper.state().cheap).toBe(false);

  good.simulate('change');

  expect(wrapper.state().cheap).toBe(true);
});

test('click fast', () => {
  const wrapper = shallow(<App />);
  const good = wrapper.find('.label__switch').last();
  expect(wrapper.state().fast).toBe(false);

  good.simulate('change');

  expect(wrapper.state().fast).toBe(true);
});
