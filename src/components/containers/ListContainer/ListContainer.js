import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Aux from '../../../hoc/Aux'
import ContactCard from '../../contacts/ContactCard/ContactCard'
import Letters from '../../contacts/Letters/Letters'
import './ListContainer.css';
import Alert from 'react-s-alert';

class ListContainer extends Component {
  state={
    contactsarray:[],
    contactsToDisplay:[],
    listOfLetter:[]
  }

fillLetters=()=>{
  let listAllLetter = this.state.contactsarray.map((c) => c.name[0]).join('');
  let listWithoutRepeated = [...new Set(listAllLetter)];
  let temp=listWithoutRepeated.sort()
  const newarray=[...temp]
  this.setState({listOfLetter:newarray});
}

searchGlobal=(event)=>{
    axios.get('http://localhost:3000/contacts?q='+event.target.value)
          .then(response =>{
            if (response.status=="200"){
                 this.setState({contactsToDisplay:response.data});
            }
          })

}

resetLetters = () =>{
  const newarray=[...this.state.contactsarray];
  this.setState({contactsToDisplay:newarray});
}
searchByLetter=(letter)=>{
  let filteredNames = this.state.contactsarray.filter(function(object) {
       return object.name.charAt(0) === letter;
    });
  const newarray=[...filteredNames]
  this.setState({contactsToDisplay:newarray});
}


  componentDidMount(){
    axios.get('http://localhost:3000/contacts/')
          .then(response =>{
            if (response.status=="200"){
                 this.setState({contactsarray:response.data});
                 this.setState({contactsToDisplay:response.data});
                 this.fillLetters();
            }
          })
          .catch((error) => {
            Alert.error("List of users could not be loaded", {
                  position: 'top',
                  effect: 'slide',
                  timeout: 3000
                });
            });
  }
  render() {
    return (
      <Aux>
        <input className="header-search" type="text" placeholder="Search for contact" onChange={this.searchGlobal}></input>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto col-sm-12">
              <span onClick={this.resetLetters} className="contactHeader">Contacts</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <div className="listletterscontainer col-md-auto col-sm-12">
                {this.state.listOfLetter.map(c=>{
                  return <Letters letter={c} key={c} click={this.searchByLetter}/>
                })}
              </div>
          </div>
          <div className="row">
            {this.state.contactsToDisplay.map(c=>{
              return <ContactCard name={c.name} mail={c.email} phone={c.phone} id={c.id} key={c.id}/>
            })}
          </div>
        </div>
        <Link to={{pathname: '/add',state:{idSize:(this.state.contactsarray.length+1)}}}><button type="button" className="btn btn-danger roundbutton">+</button></Link>
      </Aux>
    );
  }

}
export default ListContainer;
