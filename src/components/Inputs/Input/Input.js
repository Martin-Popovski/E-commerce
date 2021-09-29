import React from "react";
import "./Input.css";


const Input = (props) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={props.name + props.index}>{props.label}</label>
      <input className="input" {...props} id={props.name + props.index}/>
    </div>
  );
};
export default Input;
