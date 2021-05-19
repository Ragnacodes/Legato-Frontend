import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/Layout/NotFoundPage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
