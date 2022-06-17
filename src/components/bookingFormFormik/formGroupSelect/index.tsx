import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import {
  FormCountriesList,
  AustralianStatesList,
  FORM_INPUT,
  VALIDATION_SUCCESS_MESSAGE,
} from "../../../constants";

const FormGroupSelect = ({
  name,
  activeInput,
  activeLabelClass,
  handleChange,
  handleClick,
  isValid,
  isErrors,
  error,
}) => {
  const optionInlineStyle = {
    padding: "0.25em 0.25em !important",
    cursor: "pointer !important",
  };
  return (
    <>
      <Form.Group as={Col}>
        <div className="field-wrapper">
          <Form.Label className={activeLabelClass}>{activeInput}</Form.Label>
          <Form.Select
            name={name}
            onClick={(e) => {
              handleClick(e);
            }}
            onChange={(e) => {
              handleChange(e);
            }}
            isValid={isValid}
            isInvalid={!!isErrors}
          >
            <option className="d-none" value="">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </option>
            {name == FORM_INPUT.Location.toLowerCase()
              ? FormCountriesList.map((country) => (
                  <option
                    style={optionInlineStyle}
                    key={country.value}
                    value={country.value}
                  >
                    {country.label}
                  </option>
                ))
              : AustralianStatesList.map((state) => (
                  <option
                    style={optionInlineStyle}
                    key={state.value}
                    value={state.value}
                  >
                    {state.label}
                  </option>
                ))}
          </Form.Select>
          <Form.Control.Feedback type="valid">
            {VALIDATION_SUCCESS_MESSAGE}
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </div>
      </Form.Group>
    </>
  );
};
export default FormGroupSelect;
