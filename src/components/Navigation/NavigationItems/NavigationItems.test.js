//jshint esversion:10
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItems from './NavigationItems';
import NavItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavItems/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavItems />);
  });

  it('should render two <NavItem /> element is not authenticated', () => {
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  it('should render three <NavItem /> element if authenticated', () => {
    // wrapper = shallow(<NavItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavItem)).toHaveLength(3);
  });

  it('should render Log Out', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavItem link="/logout">Log Out</NavItem>)).toEqual(
      true
    );
  });
});
