import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Spinnator = () => {
  const spinnerPosition = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: "100%",
    height: "100%",
    background: '#d0ad97',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999999',
  };
  return (
    <div className="spinner__wrapper" style={spinnerPosition}>
      <Spinner animation='grow'/>
    </div>
  );
};
export default Spinnator;
