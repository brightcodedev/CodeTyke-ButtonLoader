import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import './Styles.scss';

const Button = ({ label, inactive, handleSubmit, isLoading, customIcon }) => {

  let icon; 
  let loader = <FontAwesomeIcon icon={faSync} className={`submitButton__iconLoader`} />

  if(isLoading) {
    icon = loader;
  } else if(customIcon) {
    icon = customIcon;
  }

  return (
    <div className={"submitButton " + (inactive ? "submitButton--inactive" : "")} onClick={handleSubmit} >
      {label} 
      <span className="submitButton__icon">{icon}</span>
    </div>
  )
}

export default Button;