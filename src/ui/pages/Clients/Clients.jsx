import React from 'react';
import './Clients.scss';

const Clients = () => {
  return (
    <div className='container-fluid ' style={{ margin: '50px 0 0 0' }}>
      <div className='row'>
        <div className='col col-xl-12 col-lg-9 col-md-6 col-sm-3 block_1'>block 1</div>
        <div className='col col-xl-12 col-lg-9 col-md-6 col-sm-3 block_2'>block 2</div>
        <div className='col col-xl-12 col-lg-9 col-md-6 col-sm-3 block_3'>block 3</div>
        <div className='col col-xl-12 col-lg-9 col-md-6 col-sm-3 block_4'>block 4</div>
      </div>
    </div>
  );
};

export default Clients;
