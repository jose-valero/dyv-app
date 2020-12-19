import React from 'react';
import './Clients.scss';

const styles = {background: 'yellow', border: '1px solid'}

const Clients = () => {
  return (
    <div className='container-fluid' style={{marginTop: '50px'}}>
      <div className='row'>
        <div style={styles} className='col_auto grid-lg-8'>block 1</div>
        <div style={styles} className='col_auto grid-lg-2'>block 2</div>
        <div style={styles} className='col_auto grid-lg-2'>block 3</div>
      </div>
    </div>
  );
};

export default Clients;
