import React from 'react';
import {configure,shallow,mount}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailsContainer from './DetailsContainer';

configure({adapter: new Adapter()});

describe('DetailsContainer Component',()=>{
  it('should render without crashing',()=>{
      const match = { params: { id: 1 } }
      const wrapper = shallow(<DetailsContainer match={match}/>);
      expect(wrapper.find('div.container')).toHaveLength(1);
  });
});
