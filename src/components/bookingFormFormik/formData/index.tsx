export const FormSubmissionData = (values, isShareForm, contactReCaptcha) => {
  console.log("values", values);

  let subject = isShareForm
    ? `Share This Page enquiry - ${values.referredCompany} - ${values.fullName}`
    : `Consulting enquiry - ${values.company} - ${values.fullName}`;

  let body = "Consulting enquiry from " + document.URL + "<br/>";
  body =
    body +
    "Company: " +
    (isShareForm ? values.referredCompany : values.company) +
    "<br/>";

  body = body + `Country: ${values.location}` + "<br/>";

  body = body + `State: ${values.states}` + "<br/>";

  body =
    body +
    "Name:  " +
    (isShareForm ? values.referredFullName : values.fullName) +
    "<br/>";

  body = body + `Phone: ${values.phone}` + "<br/>";

  body =
    body +
    "Email:   " +
    (isShareForm ? values.referredEmail : values.email) +
    "<br/>";

  body =
    body +
    (isShareForm
      ? `Referred By: ${values.fullName} (${values.email})`
      : `Note: ${values.note}`) +
    "<br/><br/>";

  console.log(body);

  const data = {
    Name: isShareForm ? values.referredFullName : values.fullName,
    Topic: subject,
    Company: isShareForm ? values.referredCompany : values.company,
    ...(!isShareForm && { Note: values.note }),
    Country: values.location,
    State: values.states,
    Email: isShareForm ? values.referredEmail : values.email,
    Phone: values.phone,
    Recaptcha: contactReCaptcha,
    EmailSubject: subject,
    EmailBody: body + "The associated CRM lead is ",
  };

  console.log(document?.location?.hostname);
  console.log(window.location.host);

  return data;
};
