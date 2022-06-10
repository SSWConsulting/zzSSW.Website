export const PAGE_TYPE = {
  Home: "Home",
  Consulting: "consulting",
  Thankyou: "Thank you for contacting SSW!",
};

//Page Types for BreadCrumbs data
export const BASE_URL = "/";

//Page Titles for layout component
export const PAGE_TITLE = {
  Consulting:
    "SSW Consulting - .NET, Web, Mobile, CRM, SharePoint, Azure, Power BI, Angular, React, Office 365 and Dynamics",

  Thankyou: "Thank you for consulting SSW!",
};

//Images Import
export const IMAGES_LINKS = {
  Azure: require("../assets/images/bg.jpg"),
};

//Color Schema
export const WHITE_SMOKE = "#f5f5f5";
export const WHITE = "#ffff";

//FORMS
//ContactForm title
export const CONTACT_FORM_TITLE = "Get your project started!";

//ShareForm title
export const SHARE_FORM_TITLE = "Connect someone with SSW";
//FORMS INPUTS
export const FORM_INPUT = {
  FullName: "fullName",
  Email: "Email",
  Phone: "Phone",
  Location: "Location",
  States: "States",
  Note: "Note",
  Company: "Company",
  ClassShow: "show",
  ReferredCompany: "referredCompany",
  ReferredFullName: "referredFullName",
  ReferredEmail: "referredEmail",
  None: "",
};
//FORMS ACTIVE_INPUTS
export const ACTIVE_INPUT = {
  FullName: "Your Full Name *",
  Email: "Your Email *",
  Phone: "Your Phone *",
  Location: "Your Location",
  States: "Your States",
  Note: "Message",
  Company: "Your Company",
  ClassShow: "show",
  ReferredCompany: "Referred Company",
  ReferredFullName: "Referred FullName",
  ReferredEmail: "Referred Email",
  None: "",
};

//Validation  Messages
export const VALIDATION_ERROR_MESSAGE = {
  fullName: "Please enter your first name and last name.",
  email: "Doesn’t look like a valid email.",
  phone: "Please enter your phone number.",
  location: "Select your country.",
  states: "Select your state.",
  note: "A message is required.",
  referredFullName: "Please enter referred name",
  referredEmail: "Please enter referred email",
};
export const VALIDATION_SUCCESS_MESSAGE = "Looks good!";

//
export const AUSTRALIA = "australia";
//SSW Form Countries List
export const FormCountriesList = [
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

//Australian all States list
export const AustralianStatesList = [
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
