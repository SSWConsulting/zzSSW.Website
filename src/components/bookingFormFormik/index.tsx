import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./index.css";
import { Formik } from "formik";
import { Button, Col, Form } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import FormGroupInput from "./formGroupInput";
import {
  ACTIVE_INPUT,
  FORM_INPUT,
  SHARE_FORM_TITLE,
  CONTACT_FORM_TITLE,
  AUSTRALIA,
  STATE_DEFAULT_VALUE,
} from "../../constants";
import { InitialValues } from "./initialValues/index";
import { ValidationSchema } from "./validationSchema/index";
import FormGroupSelect from "./formGroupSelect";
import FormGroupTextArea from "./formGroupTextArea";
import { navigate } from "gatsby";
import { FormSubmissionData } from "./formData";
import { useLocation } from "@reach/router";

const BookingFormFormik = ({ isShareForm }) => {
  //Show FormStates and Active label
  const [contactSuccess, setContactSuccess] = useState(false);
  const [country, setCountry] = useState("");
  const [activeInputLabel, setActiveInputLabel] = useState({});

  //Condition to avoid SSR (Server-Side Rendering) for getting page path
  let pathName;
  if (typeof window !== "undefined") {
    pathName = useLocation().href;
  } else {
    pathName = "";
  }
  //ReCaptcha
  const [contactReCaptcha, setContactReCaptcha] = useState("");

  //returns true if country is Australia
  const handleStates = (country) => {
    return country === AUSTRALIA;
  };

  //useMemo is call, whenever country value is changed
  const isShowStates = useMemo(() => handleStates(country), [country]);

  //Changing state of Validation Schema
  const [schema, setSchema] = useState(() =>
    ValidationSchema(isShowStates, isShareForm)
  );

  useEffect(() => {
    // every time isShowState changes, recreate the schema and set it in the state
    setSchema(ValidationSchema(isShowStates, isShareForm));
  }, [isShowStates]);

  //Form Data

  const handleActiveInputLabel = (targetInput, value) => {
    if (
      (targetInput == ACTIVE_INPUT.FullName ||
        targetInput == ACTIVE_INPUT.Email ||
        targetInput == ACTIVE_INPUT.Phone ||
        targetInput == ACTIVE_INPUT.Location ||
        targetInput == ACTIVE_INPUT.Company ||
        targetInput == ACTIVE_INPUT.Note ||
        targetInput == ACTIVE_INPUT.ReferredCompany ||
        targetInput == ACTIVE_INPUT.ReferredFullName ||
        targetInput == ACTIVE_INPUT.ReferredEmail) &&
      value.trim().length > 0
    ) {
      setActiveInputLabel({ ...activeInputLabel, [targetInput]: true });
    } else if (targetInput == ACTIVE_INPUT.States && isShowStates) {
      setActiveInputLabel({ ...activeInputLabel, [targetInput]: true });
    } else {
      setActiveInputLabel({ ...activeInputLabel, [targetInput]: false });
    }
  };

  const handleOnSubmit = async (values, actions) => {
    const data = FormSubmissionData(
      values,
      isShareForm,
      contactReCaptcha,
      pathName
    );
    actions.setSubmitting(false);

    await axios
      .post(`/ssw/api/crm/createlead`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setContactSuccess(true);
        setTimeout(function () {
          setContactSuccess(false);
          //redirect to thank you page
          navigate("/thankyou/");
        }, 1000);
      })
      .catch((err) => alert("Failed to create lead in CRM"));
  };

  return (
    <>
      <div className="modal-content">
        <div className="modal-body">
          <div className="get-started-form">
            <h2>{isShareForm ? SHARE_FORM_TITLE : CONTACT_FORM_TITLE}</h2>
            {!!contactSuccess && (
              <div className="alert alert-success" role="alert">
                An email has been sent to the SSW Sales team and someone will be
                in contact with you soon
              </div>
            )}

            <Formik
              validationSchema={schema}
              initialValues={InitialValues}
              onSubmit={handleOnSubmit}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form
                  noValidate
                  className="form-group"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <FormGroupInput
                    inputType="text"
                    activeLabelClass={
                      activeInputLabel[ACTIVE_INPUT.FullName]
                        ? ACTIVE_INPUT.ClassShow
                        : ACTIVE_INPUT.None
                    }
                    activeInput={ACTIVE_INPUT.FullName}
                    name={FORM_INPUT.FullName}
                    handleChange={(e) => {
                      handleChange(e);
                      handleActiveInputLabel(
                        ACTIVE_INPUT.FullName,
                        e.currentTarget.value
                      );
                    }}
                    isErrors={!!errors.fullName}
                    isValid={touched.fullName && !errors.fullName}
                    error={errors.fullName}
                  />

                  <FormGroupInput
                    inputType="email"
                    activeLabelClass={
                      activeInputLabel[ACTIVE_INPUT.Email]
                        ? ACTIVE_INPUT.ClassShow
                        : ACTIVE_INPUT.None
                    }
                    activeInput={ACTIVE_INPUT.Email}
                    name={FORM_INPUT.Email.toLowerCase()}
                    handleChange={(e) => {
                      handleChange(e);
                      handleActiveInputLabel(
                        ACTIVE_INPUT.Email,
                        e.currentTarget.value
                      );
                    }}
                    isErrors={!!errors.email}
                    isValid={touched.email && !errors.email}
                    error={errors.email}
                  />
                  <FormGroupInput
                    inputType="phone"
                    activeLabelClass={
                      activeInputLabel[ACTIVE_INPUT.Phone]
                        ? ACTIVE_INPUT.ClassShow
                        : ACTIVE_INPUT.None
                    }
                    activeInput={ACTIVE_INPUT.Phone}
                    name={FORM_INPUT.Phone.toLowerCase()}
                    handleChange={(e) => {
                      handleChange(e);
                      handleActiveInputLabel(
                        ACTIVE_INPUT.Phone,
                        e.currentTarget.value
                      );
                    }}
                    isErrors={!!errors.phone}
                    isValid={touched.phone && !errors.phone}
                    error={errors.phone}
                  />
                  <FormGroupSelect
                    activeLabelClass={
                      activeInputLabel[ACTIVE_INPUT.Location]
                        ? ACTIVE_INPUT.ClassShow
                        : ACTIVE_INPUT.None
                    }
                    activeInput={ACTIVE_INPUT.Location}
                    name={FORM_INPUT.Location.toLowerCase()}
                    handleChange={(e) => {
                      handleChange(e);

                      setCountry(e.currentTarget.value);
                    }}
                    handleClick={(e) => {
                      handleActiveInputLabel(
                        ACTIVE_INPUT.Location,
                        e.currentTarget.value
                      );
                    }}
                    isErrors={!!errors.location}
                    isValid={touched.location && !errors.location}
                    error={errors.location}
                  />
                  {isShowStates ? (
                    <>
                      <FormGroupSelect
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.States]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.States}
                        name={FORM_INPUT.States.toLowerCase()}
                        handleChange={(e) => {
                          handleChange(e);
                        }}
                        handleClick={(e) => {
                          handleActiveInputLabel(
                            ACTIVE_INPUT.States,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.states}
                        isValid={touched.states && !errors.states}
                        error={errors.states}
                      />
                    </>
                  ) : (
                    <input
                      type="hidden"
                      name={FORM_INPUT.States.toLowerCase()}
                      value={(values.states = STATE_DEFAULT_VALUE)}
                    />
                  )}
                  {isShareForm ? (
                    <>
                      <FormGroupInput
                        inputType="text"
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.ReferredCompany]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.ReferredCompany}
                        name={FORM_INPUT.ReferredCompany}
                        handleChange={(e) => {
                          handleChange(e);
                          handleActiveInputLabel(
                            ACTIVE_INPUT.ReferredCompany,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.referredCompany}
                        isValid={
                          touched.referredCompany && !errors.referredCompany
                        }
                        error={errors.referredCompany}
                      />
                      <FormGroupInput
                        inputType="text"
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.ReferredFullName]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.ReferredFullName}
                        name={FORM_INPUT.ReferredFullName}
                        handleChange={(e) => {
                          handleChange(e);
                          handleActiveInputLabel(
                            ACTIVE_INPUT.ReferredFullName,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.referredFullName}
                        isValid={
                          touched.referredFullName && !errors.referredFullName
                        }
                        error={errors.referredFullName}
                      />
                      <FormGroupInput
                        inputType="text"
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.ReferredEmail]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.ReferredEmail}
                        name={FORM_INPUT.ReferredEmail}
                        handleChange={(e) => {
                          handleChange(e);
                          handleActiveInputLabel(
                            ACTIVE_INPUT.ReferredEmail,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.referredEmail}
                        isValid={touched.referredEmail && !errors.referredEmail}
                        error={errors.referredEmail}
                      />
                    </>
                  ) : (
                    <>
                      <FormGroupInput
                        inputType="text"
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.Company]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.Company}
                        name={FORM_INPUT.Company.toLowerCase()}
                        handleChange={(e) => {
                          handleChange(e);
                          handleActiveInputLabel(
                            ACTIVE_INPUT.Company,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.company}
                        isValid={touched.company && !errors.company}
                        error={errors.company}
                      />
                      <FormGroupTextArea
                        name={FORM_INPUT.Note.toLowerCase()}
                        activeLabelClass={
                          activeInputLabel[ACTIVE_INPUT.Note]
                            ? ACTIVE_INPUT.ClassShow
                            : ACTIVE_INPUT.None
                        }
                        activeInput={ACTIVE_INPUT.Note}
                        handleChange={(e) => {
                          handleChange(e);
                          handleActiveInputLabel(
                            ACTIVE_INPUT.Note,
                            e.currentTarget.value
                          );
                        }}
                        isErrors={!!errors.note}
                        isValid={touched.note && !errors.note}
                        error={errors.note}
                      />
                    </>
                  )}
                  <div className="form-group recaptcha">
                    {process.env.RECAPTCHA_KEY !== "FALSE" && (
                      <ReCAPTCHA
                        sitekey={process.env.RECAPTCHA_KEY}
                        onChange={(value) => {
                          setContactReCaptcha(value);
                        }}
                      />
                    )}
                  </div>
                  <Button className="btn done" type="submit">
                    SUBMIT
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingFormFormik;
