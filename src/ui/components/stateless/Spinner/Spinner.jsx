import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinnator = () => {
  const spinnerPosition = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    margin: '0',
  };
  return (
    <div style={spinnerPosition}>
      <Spinner style={spinnerPosition} animation='grow'/>
    </div>
  );
};
export default Spinnator;
