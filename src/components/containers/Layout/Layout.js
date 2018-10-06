import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../transferWise_logo.png';
import './Layout.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Aux from '../../../hoc/Aux'

const layout = (props) =>(
  <Aux>
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    </header>
    <Alert stack={{limit: 3}} />
    <main className="main-content">
      {props.children}
    </main>
    <footer>
      <span>All rights reserved. TransferWise 2018</span>
    </footer>
  </Aux>
);
export default layout;
