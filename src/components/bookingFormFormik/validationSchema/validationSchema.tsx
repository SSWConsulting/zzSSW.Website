import * as yup from "yup";
import { VALIDATION_ERROR_MESSAGE } from "../../../constants";
export const ValidationSchema = (isShowStates: boolean) =>
  yup.object().shape({
    fullName: yup.string().required(VALIDATION_ERROR_MESSAGE.fullName),
    email: yup.string().email().required(VALIDATION_ERROR_MESSAGE.email),
    phone: yup.string().required(VALIDATION_ERROR_MESSAGE.phone),
    location: yup.string().required(VALIDATION_ERROR_MESSAGE.location),
    states: isShowStates
      ? yup.string().required(VALIDATION_ERROR_MESSAGE.states)
      : null,

    note: yup.string().required(VALIDATION_ERROR_MESSAGE.note),
    // referredFullName: yup
    //   .string()
    //   .required(VALIDATION_ERROR_MESSAGE.referredFullName),
    // referredEmail: yup
    //   .string()
    //   .email()
    //   .required(VALIDATION_ERROR_MESSAGE.referredEmail),
  });
