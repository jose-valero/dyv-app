import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinnator = () => {
  const spinnerPosition = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: "100%",
    height: "100%",
    margin: '0',
    Overflow: "hidden"
  };
  return (
    <div style={spinnerPosition}>
      <Spinner animation='grow'/>
    </div>
  );
};
export default Spinnator;
