import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

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
  const handleAusState = (country) => {
    if (country == "australia") {
      setIsShowState(true);
    } else {
      setIsShowState(false);
    }
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="validationFullName">
        <Form.Control required type="text" placeholder="Full Name *" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationEmail">
        <Form.Control type="email" placeholder="Email *" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} controlId="validationPhone">
        <Form.Control type="phone" placeholder="Phone " />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="locationSelect">
        <Form.Select>
          <option className="d-none" value="">
            Location
          </option>
          {countriesList.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="australianStateSelect">
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
      </Form.Group>

      <Form.Group as={Col} controlId="validationFullName">
        <Form.Control required type="text" placeholder="Company" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
    </Form>
  );
};

export default BookingForm;
