import React from 'react';
import {configure,shallow,mount}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Letters from './Letters';
import Aux from '../../../hoc/Aux';

configure({adapter: new Adapter()});

describe('Letters Component',()=>{
  it('should render without crashing',()=>{
      const wrapper = shallow(<Letters/>);
      expect(wrapper.find(Aux)).toHaveLength(1);
  });
  it('calls onClick event on click on Letter', () =>{
      const onClick = jest.fn();
      let wrapper = mount(<Letters letter={"A"} click={onClick}/>);
      wrapper.find('#letterClick').first().simulate('click');
      expect(onClick).toBeCalledWith("A");
  })
});
