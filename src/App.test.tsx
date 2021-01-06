import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';
import { Login } from './components/login/Login';
import { Home } from './components/home/Home';

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('app')).toEqual(true);
});

it('contains the Login component', () => {
  expect(wrapped.find(Login).length).toEqual(1);
});

it('contains the Home component', () => {
  expect(wrapped.find(Home).length).toEqual(1);
});
