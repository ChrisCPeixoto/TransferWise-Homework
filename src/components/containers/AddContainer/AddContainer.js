import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Aux from '../../../hoc/Aux'

class AddContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:this.props.location.state.idsize
    }
  }

  handleSubmit=(event)=>{
   let newUser;
   if(event){
        event.preventDefault();
         newUser = {
          id:this.state.id,
          name:event.target.InputName.value ,
          email:event.target.InputEmail.value,
          phone:event.target.PhoneInput.value,
        }
    }
    const headers = {'Content-Type':'application/json'}
    axios.post('http://localhost:3000/contacts/',newUser, {headers: headers})
    .then(response =>{
      if (response.status=="201"){
        this.props.history.push('/details/'+response.data.id);
      }
    })
    .catch((error) => {

      });
  }

  render() {
    return (
      <Aux>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto col-sm-12">
              <span className="detailsHeader">Add New Contact</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <form onSubmit={this.handleSubmit.bind(this)} className="contactForm col-sm-12 col-md-8">
                <div className="form-group">
                  <label htmlFor="InputName">Name</label>
                  <input type="text" className="form-control" id="InputName" placeholder="Enter Name"></input>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                        <label htmlFor="PhoneInput">Phone Number</label>
                        <input  className="form-control" id="PhoneInput"  placeholder="Enter phone"></input>
                </div>
                <div className="row button-form">
                <button type="submit" className="btn btn-outline-secondary">Add Contact</button>
                </div>
            </form>
          </div>
        </div>
      </Aux>
 );}
}
export default AddContainer;
