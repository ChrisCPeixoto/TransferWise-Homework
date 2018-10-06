import React  from 'react';
import Aux from '../../../hoc/Aux';
import './Letters.css';


const Letters = (props) => {
    return (
      <Aux>
            <span onClick={() => {{props.click(props.letter)}}} className="letterSearch">{props.letter}</span>
      </Aux>
    );
};
export default Letters;
