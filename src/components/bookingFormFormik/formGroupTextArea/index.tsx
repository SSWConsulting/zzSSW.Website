import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { VALIDATION_SUCCESS_MESSAGE } from "../../../constants";

const FormGroupTextArea = ({
  name,
  activeInput,
  activeLabelClass,
  handleChange,
  isValid,
  isErrors,
  error,
}) => {
  return (
    <Form.Group controlId="contactFormNote">
      <div className="field-wrapper">
        <Form.Label className={activeLabelClass}>{activeInput}</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Note"
          rows={4}
          maxLength={2000}
          name={name}
          onChange={handleChange}
          isValid={isValid}
          isInvalid={!!isErrors}
        />
        <small>Maximium 2000 characters</small>
        <Form.Control.Feedback type="valid">
          {VALIDATION_SUCCESS_MESSAGE}
        </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};
export default FormGroupTextArea;
