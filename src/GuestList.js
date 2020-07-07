import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>        
<ul>
    {props.guests.map((guest, index) =>
<Guest 
key = {index} 
name={guest.name} 
handleConfirmation={ () => props.toggleConfirmationAt(index)}
isConfirmed={guest.isConfirmed}/>
    )}
</ul> 
GuestList.propTypes= {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired
}
export default GuestList;