import React, { useState, forwardRef, useImperativeHandle  } from "react";
import CustomInput from "../Inputs/CustomInput";
import Button from '../Button/Button';

const Form = forwardRef(({ inputs, initialInputs, onSubmit}, ref) => {
  const [formValues, setFormValues] = useState(initialInputs);

  const onInputChange = (event) => {
    event.persist();
    setFormValues((prevValues) => ({ ...prevValues, [event.target.name]: event.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };
  
  const resetForm = () => {
    setFormValues(initialInputs);
  }

  useImperativeHandle(ref, () => ({
    resetForm
  }));

  return (
    <form  onSubmit={onSubmitHandler} ref={ref}>
      {inputs.map((input, index) => (
        <CustomInput {...input} onChange={(e) => onInputChange(e)} value={formValues[input.name]} key={index} index={index}/>
      ))}
     <Button type="submit" color="blue">SEND</Button>
    </form>
  );
});

export default Form;
