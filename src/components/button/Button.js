import React from 'react';
import './Styles.scss';

const Button = (props) => {
  return (
    <div
      className={
        'submitButton ' +
        (props.state === 'inactive' ? 'submitButton--inactive' : '')
      }
      onClick={props.handleSubmit}
    >
      {props.label}
      {props.children}
    </div>
  );
};

export default Button;
