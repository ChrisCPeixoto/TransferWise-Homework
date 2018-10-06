import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-s-alert';

import Aux from '../../../hoc/Aux'
import './DetailsContainer.css';

class DetailsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:{name:"",email:"",phone:"",id:this.props.match.params.id}
    }
  }
  deleteContact = (event) => {
    axios.delete('http://localhost:3000/contacts/'+this.props.match.params.id)
    .then(response =>{
      if (response.status=="200"){
        this.props.history.push('/');
        Alert.success('User Deleted', {
              position: 'top',
              effect: 'slide',
              timeout: 3000
            });
      }
    })
    .catch((error) => {
      Alert.error('User was not deleted', {
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
              <span className="detailsHeader">{this.state.user.name}  Profile</span>
              <hr/>
            </div>
          </div>
          <div className="row justify-content-md-center">
              <div className="contactForm col-sm-12 col-md-4">
                  <div className="form-group">
                    <span className="label-details" >Name:</span>
                    <span className="content-details">{this.state.user.name}</span>
                  </div>
                  <div className="form-group">
                    <span className="label-details" >Email:</span>
                    <span className="content-details red">{this.state.user.email}</span>
                  </div>
                  <div className="form-group">
                    <span className="label-details" >Phone:</span>
                    <span className="content-details red">{this.state.user.phone}</span>
                  </div>
                  <div className="row button-form">
                  <button onClick={this.deleteContact} className="btn btn-outline-danger btn-details">Delete</button>
                  <Link to={'/edit/'+this.state.user.id}><button  className="btn btn-outline-secondary btn-details">Edit</button></Link>
                  </div>
              </div>
            </div>
        </div>
      </Aux>
    );
  }

}
export default DetailsContainer;
