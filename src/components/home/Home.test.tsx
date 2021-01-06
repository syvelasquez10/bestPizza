import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Home } from './Home';
import ModalStore from '../shared/ModalStore';
import SearchField from '../shared/SearchField';

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<Home />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('home')).toEqual(true);
});

it('contains the Modal Store component', () => {
  expect(wrapped.find(ModalStore).length).toEqual(1);
});

it('contains the Search Field component', () => {
  expect(wrapped.find(SearchField).length).toEqual(1);
});
