import React  from 'react';
import Aux from '../../../hoc/Aux';
import './ContactCard.css';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
    return (
      <Aux>
          <div className="col-md-4 col-sm-12">
              <div className="card">
                    <Link to={'/details/'+props.id}>  <span className="card-click"></span></Link>
                    <div className="card-header">
                      {props.name}
                    </div>
                    <div className="card-body">
                      <p className="card-text">{props.mail}</p>
                      <p className="card-text">{props.phone}</p>
                    </div>
                </div>
            </div>
      </Aux>
    );
};
export default ContactCard;
