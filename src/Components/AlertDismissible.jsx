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