import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import './Styles.scss';

const Button = ({ label, inactive, handleSubmit, isLoading, customIcon }) => {

  let loaderIcon = <FontAwesomeIcon icon={faSync} className={`submitButton__iconLoader`} />
  let displayIcon = isLoading && loaderIcon || customIcon

  return (
    <div className={"submitButton " + (inactive ? "submitButton--inactive" : "")} onClick={handleSubmit} >
      {label} 
      <span className="submitButton__icon">{displayIcon}</span>
    </div>
  )
}

export default Button;