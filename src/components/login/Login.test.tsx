import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Button, Form, Input } from "antd";
import SearchField from '../shared/SearchField';
import { Login } from './Login';

let wrapped: ShallowWrapper;
beforeEach(() => {
  wrapped = shallow(<Login />);
});

it('renders the main div', () => {
  expect(wrapped.hasClass('login')).toEqual(true);
});

it('contains the Form component', () => {
  expect(wrapped.find(Form).length).toEqual(1);
});

it('contains 3 Form.item components', () => {
  expect(wrapped.find(Form.Item).length).toEqual(3);
});

it('contains 1 Button component', () => {
  expect(wrapped.find(Button).length).toEqual(1);
});

it('contains 1 Input component', () => {
  expect(wrapped.find(Input).length).toEqual(1);
});

it('contains 1 Input Password component', () => {
  expect(wrapped.find(Input.Password).length).toEqual(1);
});
