/**
 *@component This component renders dismissible/ closable error message box .
 *@params {Pros-Object} 
 * message {String}- text to display on message box
 * f {Boolean} -prop to display text on Alert
 * setError {Function Ref} - to change value of State 
 * variant {String} - to change appearance style of alert
 * @returns {ReactNode} A React element that renders when validation error occurs
 */


import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

function AlertDismissible({ message, f,setError ,variant}) {
  //const [show, setShow] = useState(f);

  
  // Reset the alert visibility when the alert is dismissed
  const handleClose = () => setError({msg:"",f:false});

  return f ? (
    <Alert variant={variant} className='my-3' onClose={handleClose} dismissible>
      <Alert.Heading>You got an error!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  ) : "";

}

AlertDismissible.propTypes = {
  message: PropTypes.string.isRequired,
  f: PropTypes.bool.isRequired,
};

export default AlertDismissible;