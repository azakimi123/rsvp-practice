import React from 'react';
import PropTypes from 'prop-types';

const Guest= props =>    
<li>    
  <span>{props.name}</span>
  <label>
    <input 
    type="checkbox" 
    onChange={props.handleConfirmation}
    checked={props.isConfirmed}/> Confirmed
  </label>
  <button>edit</button>
  <button>remove</button>
</li>
Guest.propTypes= {
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    handleConfirmation: PropTypes.func.isRequired
}
export default Guest;