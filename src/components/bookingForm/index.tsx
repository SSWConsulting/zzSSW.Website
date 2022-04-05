import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import "./index.css";

const BookingForm = () => {
  const ACTIVE_INPUT = {
    FullName: "Full Name *",
    Email: "Email *",
    Phone: "Phone *",
    Location: "Location",
    States: "States",
    Note: "Message",
    Company: "Company",
    ClassShow: "show",
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
  //Form Validation
  const [validated, setValidated] = useState(false);
  //Form Data
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("Other");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");

  const handleInput = (targetInput, value) => {
    if (
      (targetInput == ACTIVE_INPUT.FullName ||
        targetInput == ACTIVE_INPUT.Email ||
        targetInput == ACTIVE_INPUT.Phone ||
        targetInput == ACTIVE_INPUT.Location ||
        targetInput == ACTIVE_INPUT.Company ||
        targetInput == ACTIVE_INPUT.Note) &&
      value.trim().length > 0
    ) {
      setActiveLabel({ ...activeLabel, [targetInput]: true });
      switch (targetInput) {
        case ACTIVE_INPUT.FullName:
          setFullName(value);
        case ACTIVE_INPUT.Email:
          setEmail(value);
        case ACTIVE_INPUT.Phone:
          setPhone(value);
        case ACTIVE_INPUT.Location:
          if (state.trim().length > 0) {
            setState("Other");
          }
          setLocation(value);
        case ACTIVE_INPUT.Company:
          setCompany(value);
        case ACTIVE_INPUT.Note:
          setNote(value);
        default:
          break;
      }
    } else if (targetInput == ACTIVE_INPUT.States && location == "australia") {
      setActiveLabel({ ...activeLabel, [targetInput]: true });
      setState(value);
    } else {
      setActiveLabel({ ...activeLabel, [targetInput]: false });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
      const subject = "Consulting enquiry - " + company + " - " + fullName;
      let body = "Consulting enquiry from " + document.URL + "<br/>";
      body = body + "Company: " + company + "<br/>";
      body = body + "State:  " + state + "<br/>";
      body = body + "Name:  " + fullName + "<br/>";
      body = body + "Phone:   " + phone + "<br/>";
      body = body + "Email:   " + email + "<br/>";
      body = body + "Note:    " + note + "<br/><br/>";
      const data = {
        Name: fullName,
        Topic: subject,
        Company: company,
        Note: note,
        Country: location,
        State: state,
        Email: email,
        Phone: phone,
        EmailSubject: subject,
        EmailBody: body + "The associated CRM lead is ",
      };
      axios
        .post("https://www.ssw.com.au/ssw/api/crm/createlead", data)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  };

  let theStateList;
  if (isShowState) {
    theStateList = (
      <>
        <Form.Group controlId="australianStateSelect">
          <div className="field-wrapper">
            <Form.Label
              className={
                activeLabel[ACTIVE_INPUT.States] == true
                  ? ACTIVE_INPUT.ClassShow
                  : ACTIVE_INPUT.None
              }
            >
              {ACTIVE_INPUT.States}
            </Form.Label>
            <Form.Select
              required
              onClick={(e) => {
                handleInput(ACTIVE_INPUT.States, e.currentTarget.value);
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
                    activeLabel[ACTIVE_INPUT.FullName] == true
                      ? ACTIVE_INPUT.ClassShow
                      : ACTIVE_INPUT.None
                  }
                >
                  {ACTIVE_INPUT.FullName}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInput(ACTIVE_INPUT.FullName, e.currentTarget.value);
                  }}
                  required
                  type="text"
                  placeholder={ACTIVE_INPUT.FullName}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide your full name.
                </Form.Control.Feedback>
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
                    handleInput(ACTIVE_INPUT.Email, e.currentTarget.value);
                  }}
                  required
                  type="email"
                  placeholder={ACTIVE_INPUT.Email}
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
                    activeLabel[ACTIVE_INPUT.Phone] == true
                      ? ACTIVE_INPUT.ClassShow
                      : ACTIVE_INPUT.None
                  }
                >
                  {ACTIVE_INPUT.Phone}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInput(ACTIVE_INPUT.Phone, e.currentTarget.value);
                  }}
                  type="phone"
                  placeholder={ACTIVE_INPUT.Phone}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group controlId="locationSelect">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Location] == true
                      ? ACTIVE_INPUT.ClassShow
                      : ACTIVE_INPUT.None
                  }
                >
                  {ACTIVE_INPUT.Location}
                </Form.Label>
                <Form.Select
                  required
                  onClick={(e) => {
                    handleInput(ACTIVE_INPUT.Location, e.currentTarget.value);
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
            <Form.Group as={Col} controlId="validationCompany">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Company] == true
                      ? ACTIVE_INPUT.ClassShow
                      : ACTIVE_INPUT.None
                  }
                >
                  {ACTIVE_INPUT.Company}
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleInput(ACTIVE_INPUT.Company, e.currentTarget.value);
                  }}
                  required
                  type="text"
                  placeholder={ACTIVE_INPUT.Company}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please provide your full name.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <Form.Group controlId="contactFormNote">
              <div className="field-wrapper">
                <Form.Label
                  className={
                    activeLabel[ACTIVE_INPUT.Note] == true
                      ? ACTIVE_INPUT.ClassShow
                      : ACTIVE_INPUT.None
                  }
                >
                  {ACTIVE_INPUT.Note}
                </Form.Label>

                <Form.Control
                  as="textarea"
                  placeholder="Note"
                  rows={4}
                  maxLength={2000}
                  name="address"
                  required
                  onChange={(e) => {
                    handleInput(ACTIVE_INPUT.Note, e.currentTarget.value);
                  }}
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
