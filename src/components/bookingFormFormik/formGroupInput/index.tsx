import { Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import { VALIDATION_SUCCESS_MESSAGE } from "../../../constants";

const FormGroupInput = ({
  name,
  inputType,
  activeInput,
  activeLabelClass,
  handleChange,
  isValid,
  isErrors,
  error,
}) => {
  return (
    <>
      <Form.Group as={Col}>
        <div className="field-wrapper">
          <Form.Label className={activeLabelClass}>{activeInput}</Form.Label>
          <Form.Control
            type={inputType}
            placeholder={activeInput}
            name={name}
            onChange={handleChange}
            isValid={isValid}
            isInvalid={!!isErrors}
          />
          <Form.Control.Feedback type="valid">
            {VALIDATION_SUCCESS_MESSAGE}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </div>
      </Form.Group>
    </>
  );
};
export default FormGroupInput;
