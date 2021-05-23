import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  return (
    <div className='button'>
      <span>
        <Link to={props.route}>{props.name}</Link>
      </span>
      <svg>
        <polyline className='o1' points='0 0, 150 0, 150 55, 0 55, 0 0'></polyline>
        <polyline className='o2' points='0 0, 150 0, 150 55, 0 55, 0 0'></polyline>
      </svg>
    </div>
  );
};
export default Button;
