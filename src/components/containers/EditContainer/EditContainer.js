import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-s-alert';

import Aux from '../../../hoc/Aux'



class EditContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:{name:"",email:"",phone:"",id:this.props.match.params.id}
    }
  }
   inputChangedHandler = (event) => {
     let temp = {...this.state.user};
     if(event.target.id=="InputName"){
     temp.name=event.target.value;
   }else if(event.target.id=="InputEmail"){
   temp.email=event.target.value;
   }else if(event.target.id=="PhoneInput"){
   temp.phone=event.target.value;
   }
   this.setState({user:temp});
   }

  handleSubmit=(event)=>{
   let newUser;
   if(event){
        event.preventDefault();
         newUser = {
          id:this.props.match.params.id,
          name:event.target.InputName.value ,
          email:event.target.InputEmail.value,
          phone:event.target.PhoneInput.value,
        }
    }
    const headers = {'Content-Type':'application/json'}
    axios.put('http://localhost:3000/contacts/'+this.props.match.params.id,newUser, {headers: headers})
    .then(response =>{
      if (response.status=="200"){
        Alert.success('User Updated', {
              position: 'top',
              effect: 'slide',
              timeout: 3000
            });
        this.props.history.push('/details/'+this.props.match.params.id);
      }
    })
    .catch((error) => {
      Alert.error("User couldn't be updated", {
            position: 'top',
            effect: 'slide',
            timeout: 3000
          });
      });
  }

  componentDidMount(){
    axios.get('http://localhost:3000/contacts/'+this.props.match.params.id)
          .then(response =>{
            if (response.status=="200"){
                 this.setState({user:response.data});
            }
          })
  }

  render() {
    return (
      <Aux>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto col-sm-12">
              <span className="detailsHeader">Edit {this.state.user.name}  Profile</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <form onSubmit={this.handleSubmit.bind(this)} className="contactForm col-sm-12 col-md-4">
                <div className="form-group">
                    <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Name:</span>
                      <input type="text" onChange={this.inputChangedHandler} className="form-control form-edit col-sm-8" id="InputName" value={this.state.user.name}></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Email:</span>
                      <input type="email" onChange={this.inputChangedHandler}  className="form-control form-edit col-sm-8" id="InputEmail" value={this.state.user.email}></input>
                    </div>
                </div>
                <div className="form-group">
                  <div className="row justify-content-md-center">
                      <span className="label-details col-sm-3" >Phone:</span>
                      <input  onChange={this.inputChangedHandler}  className="form-control form-edit  col-sm-8" id="PhoneInput"  value={this.state.user.phone}></input>
                  </div>
                </div>
                <div className="row button-form">
                <button  type="submit" className="btn btn-outline-secondary">Save Contact</button>
                </div>
             </form>
            </div>
        </div>
      </Aux>
    );
  }

}
export default EditContainer;
