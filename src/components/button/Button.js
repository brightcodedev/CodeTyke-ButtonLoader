import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import './Styles.scss';

const Button = (props) => {

  return (
    <div className={"submitButton " + (props.inactive ? "submitButton--inactive" : "")} onClick={props.handleSubmit} >
      {props.label}
      <FontAwesomeIcon className={"submitButton__loader " + (props.isLoading ? "submitButton__loader__loading" : "submitButton__loader__hidden")} icon={faSync} />
    </div>
  )
}

export default Button;