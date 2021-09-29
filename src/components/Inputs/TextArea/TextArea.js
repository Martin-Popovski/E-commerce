import React from "react";

const TextArea = (props) => {
  return (
    <div className={"input-wrapper textarea-wrapper"} >
      <label htmlFor={props.name + props.index}>{props.label}</label>
      <textarea className="input" {...props} id={props.name + props.index}></textarea>
    </div>
  );
};
export default TextArea;
