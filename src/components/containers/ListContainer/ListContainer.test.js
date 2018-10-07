import React from 'react';
import {configure,shallow}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListContainer from './ListContainer';
import ContactCard from '../../contacts/ContactCard/ContactCard'
import Letters from '../../contacts/Letters/Letters'

configure({adapter: new Adapter()});

describe('ListContainer Container Component',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<ListContainer/>);
  });

  it('should render without crashing',()=>{
      expect(wrapper.find('div.container')).toHaveLength(1);
  });
  it('empty list of contact',()=>{
      wrapper.setState({ contactsToDisplay: []});
      expect(wrapper.find(ContactCard)).toHaveLength(0);
  });
  it('Display two contacts',()=>{
      wrapper.setState({ contactsToDisplay: [{
        "id": 1,
        "name": "Kiss Bence",
        "email": "kissbence@gmail.com",
        "phone": "+3620789732"
      },
      {
        "id": 2,
        "name": "Kovacs Ibolyaa",
        "email": "kovacsibolya@gmail.com",
        "phone": "+3620837732"
      }]});
      expect(wrapper.find(ContactCard)).toHaveLength(2);
  });
  it('empty list of letters',()=>{
    wrapper.setState({ contactsarray: []});
    wrapper.instance().fillLetters();
    expect(wrapper.find(Letters)).toHaveLength(0);
  });
  it('Display one letter',()=>{
    wrapper.setState({ contactsarray: [{
      "id": 1,
      "name": "Kiss Bence",
      "email": "kissbence@gmail.com",
      "phone": "+3620789732"
    },
    {
      "id": 2,
      "name": "Kovacs Ibolyaa",
      "email": "kovacsibolya@gmail.com",
      "phone": "+3620837732"
    }]});
      wrapper.instance().fillLetters();
      expect(wrapper.find(Letters)).toHaveLength(1);
  });
  it('Display two letters',()=>{
    wrapper.setState({ contactsarray: [{
      "id": 1,
      "name": "Kiss Bence",
      "email": "kissbence@gmail.com",
      "phone": "+3620789732"
    },
    {
      "id": 2,
      "name": "Kovacs Ibolyaa",
      "email": "kovacsibolya@gmail.com",
      "phone": "+3620837732"
    },
    {
      "id": 3,
      "name": "Nagy David",
      "email": "nagydavid@gmail.com",
      "phone": "+3620907752"
    }]});
      wrapper.instance().fillLetters();
      expect(wrapper.find(Letters)).toHaveLength(2);
  });

});
