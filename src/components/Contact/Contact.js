import React, { useRef } from "react";
import "./Contact.css";
import Form from "../FormComponent/Form";
import { contactFormInputs } from "../../data/contactFormInputs.json";
const initialInputs = { name: "", email: "", message: "" };

const Contact = (props) => {
  const formEl = useRef();

  const handleSubmit = async (formValues) => {
    //Send form values to backend
    //Show message
    //Clear form
    formEl.current.resetForm();
  };

  return (
    <section className="contact">
      <div className="contact__text-wrapper">
        <p className="contact__text">question?</p>
        <p className="contact__text">we are here</p>
        <p className="contact__text">to help!</p>
      </div>

      <Form
        initialInputs={initialInputs}
        inputs={contactFormInputs}
        onSubmit={handleSubmit}
        ref={formEl}
      />
    </section>
  );
};

export default Contact;
