import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "./index.css";

const BookingForm = () => {
  const ACTIVE_INPUT = {
    FullName: "Full Name *",
    Email: "Email *",
    Phone: "Phone *",
    Location: "Location *",
    States: "States *",
    None: "",
  };

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
  const [activeLabel, setActiveLabel] = useState({});

  const handleInputClicked = (targetInput, value) => {
    if (
      (targetInput == ACTIVE_INPUT.FullName ||
        targetInput == ACTIVE_INPUT.Email ||
        targetInput == ACTIVE_INPUT.Phone ||
        targetInput == ACTIVE_INPUT.Location ||
        targetInput == ACTIVE_INPUT.States) &&
      value.trim().length > 0
    ) {
      setActiveLabel({ ...activeLabel, [targetInput]: true });
    } else {
      setActiveLabel({ ...activeLabel, [targetInput]: false });
    }
  };

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  let theStateList;
  if (isShowState) {
    theStateList = (
      <>
        <Form.Group controlId="australianStateSelect">
          <div className="field-wrapper">
            <Form.Label
              className={activeLabel[ACTIVE_INPUT.States] == true ? "show" : ""}
            >
              {ACTIVE_INPUT.States}
            </Form.Label>
            <Form.Select
              required
              onClick={(e) => {
                handleInputClicked(ACTIVE_INPUT.States, e.currentTarget.value);
              }}
            >
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
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.FullName] == true ? "show" : ""
                  }
                >
                  {ACTIVE_INPUT.FullName}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInputClicked(
                      ACTIVE_INPUT.FullName,
                      e.currentTarget.value
                    );
                  }}
                  required
                  type="text"
                  placeholder="Full Name *"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="validationEmail">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Email] == true ? "show" : ""
                  }
                >
                  {ACTIVE_INPUT.Email}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInputClicked(
                      ACTIVE_INPUT.Email,
                      e.currentTarget.value
                    );
                  }}
                  required
                  type="email"
                  placeholder="Email *"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide valid email.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group as={Col} controlId="validationPhone">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Phone] == true ? "show" : ""
                  }
                >
                  {ACTIVE_INPUT.Phone}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInputClicked(
                      ACTIVE_INPUT.Phone,
                      e.currentTarget.value
                    );
                  }}
                  type="phone"
                  placeholder="Phone "
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group controlId="locationSelect">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Location] == true ? "show" : ""
                  }
                >
                  {ACTIVE_INPUT.Location}
                </Form.Label>
                <Form.Select
                  required
                  onClick={(e) => {
                    handleInputClicked(
                      ACTIVE_INPUT.Location,
                      e.currentTarget.value
                    );
                  }}
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
                  required
                />
                <small>Maximium 2000 characters</small>
                <Form.Control.Feedback type="invalid">
                  Please provide note.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Button className="btn done" type="submit">
              SUBMIT
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
