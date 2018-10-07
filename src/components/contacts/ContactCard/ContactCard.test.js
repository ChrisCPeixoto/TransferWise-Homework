import React from 'react';
import {configure,shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactCard from './ContactCard';

configure({adapter: new Adapter()});

describe('ContactCard Component',()=>{
  it('should render without crashing',()=>{
      const wrapper = shallow(<ContactCard/>);
      expect(wrapper.find('div.card')).toHaveLength(1);
  });
});
