import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import "./index.css";

const BookingForm = () => {
  const countriesList = [
    {
      label: "Australia",
      value: "australia",
    },
    {
      label: "China",
      value: "china",
    },
    {
      label: "Europe",
      value: "eu",
    },
    {
      label: "South America",
      value: "southamerica",
    },
    {
      label: "USA",
      value: "usa",
    },

    {
      label: "Other",
      value: "other",
    },
  ];

  const australianStates = [
    {
      label: "Australian Capital Territory",
      value: "ACT",
    },
    {
      label: "New South Wales",
      value: "NSW",
    },
    {
      label: "Northern Territory",
      value: "NT",
    },
    {
      label: "Queensland",
      value: "QLD",
    },
    {
      label: "South Australia",
      value: "SA",
    },
    {
      label: "Tasmania",
      value: "TAS",
    },
    {
      label: "Victoria",
      value: "VIC",
    },
    {
      label: "Western Australia",
      value: "WA",
    },
  ];

  const [isShowState, setIsShowState] = useState(false);
  const [validated, setValidated] = useState(false);
  let theStateList;
  if (isShowState) {
    theStateList = (
      <>
        <Form.Group controlId="australianStateSelect">
          <div className="field-wrapper">
            <Form.Select>
              <option className="d-none" value="">
                State
              </option>
              {australianStates.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </Form.Select>
          </div>
        </Form.Group>
      </>
    );
  } else {
    theStateList = null;
  }
  console.log(isShowState);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
  };

  return (
    <div className="modal-content">
      <div className="modal-body">
        <div className="get-started-form">
          <h2>Get your project started!</h2>
          <Form
            noValidate
            validated={validated}
            className="form-group"
            onSubmit={handleSubmit}
          >
            <Form.Group as={Col} controlId="validationFullName">
              <div className="field-wrapper">
                <Form.Label className="show">Full Name *</Form.Label>
                <Form.Control required type="text" placeholder="Full Name *" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="validationEmail">
              <div className="field-wrapper">
                <Form.Control type="email" placeholder="Email *" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="validationPhone">
              <div className="field-wrapper">
                <Form.Control type="phone" placeholder="Phone " />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group controlId="locationSelect">
              <div className="field-wrapper">
                <Form.Select
                  onChange={(e) => {
                    e.currentTarget.value == "australia"
                      ? setIsShowState(true)
                      : setIsShowState(false);
                  }}
                >
                  <option className="d-none" value="">
                    Location
                  </option>
                  {countriesList.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Form.Group>
            {theStateList}
            <Form.Group controlId="contactFormNote">
              <div className="field-wrapper">
                <Form.Control
                  as="textarea"
                  placeholder="Note"
                  rows={4}
                  maxLength={2000}
                  name="address"
                />
                <small>Maximium 2000 characters</small>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
