import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {
  WARNING_MESSAGE,
  WARNING_ALERT_VARIANT,
} from '../../configs/constants';

function Warning() {
  return (
    <Alert variant={WARNING_ALERT_VARIANT} className="mt-4 mb-4">
      <Alert.Heading className="text-center mt-4 mb-4">
        {WARNING_MESSAGE || 'Oops, something went wrong'}
      </Alert.Heading>
    </Alert>
  );
}

export default Warning;
