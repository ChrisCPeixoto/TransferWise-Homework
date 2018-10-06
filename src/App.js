import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';


import './App.css';

import Layout from './components/containers/Layout/Layout';
import ListContainer from './components/containers/ListContainer/ListContainer';
import AddContainer from './components/containers/AddContainer/AddContainer'
import DetailsContainer from './components/containers/DetailsContainer/DetailsContainer'
import EditContainer from './components/containers/EditContainer/EditContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-10 col-sm-12">
                  <Layout>
                    <Route path="/" exact component={ListContainer}/>
                    <Route path="/add" exact component={AddContainer}/>
                    <Route path="/details/:id" exact component={DetailsContainer}/>
                    <Route path="/edit/:id" exact component={EditContainer}/>
                  </Layout>
                </div>
              </div>
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
