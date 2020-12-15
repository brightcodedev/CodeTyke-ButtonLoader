import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

import './Styles.scss';

const Button = (props) => {
  const { label, iconType, inactive } = props

  let icon
  if (iconType === 'loading') icon = faSync

  return (
    <button className={"submitButton " + (inactive ? "submitButton--inactive" : "")} onClick={props.handleSubmit}>
      {label}
      {icon && <FontAwesomeIcon icon={icon} className={`submitButton__icon submitButton__icon--${iconType}`} />}
    </button>
  )
}

export default Button;
