import { icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton " + (props.inactive ? "submitButton--inactive" : "")} onClick={props.handleSubmit} >
      {props.label}
      {props.label} {props.isLoading ? <span className="submitButton__icon">{props.icon}</span> : null}
    </div>
  )
}

export default Button;