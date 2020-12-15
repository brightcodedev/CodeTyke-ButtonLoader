import React from "react";
import Loader from "react-loader-spinner";

import "./Styles.scss";

const Button = (props) => {
  console.log("the props", props);
  return (
    <div
      className={
        "submitButton " + (props.inactive ? "submitButton--inactive" : "")
      }
      onClick={props.handleSubmit}
    >
     
      {props.label}
      {props.loader ?  
      <Loader
        className="submitButton--loader" 
        type="TailSpin"
        timeout={800}/> 
         : null} 
     
    </div>
  );
};

export default Button;
