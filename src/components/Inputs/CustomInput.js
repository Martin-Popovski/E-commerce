import React from "react";
import Input from "./Input/Input";
import TextArea from "./TextArea/TextArea";


const CustomInput = (props) => {
  switch (props.inputtype) {
    case "input":
      return <Input {...props} />;
    case "textArea":
      return <TextArea {...props} />;
    default:
      return <Input {...props} />;
  }
};
export default CustomInput;
