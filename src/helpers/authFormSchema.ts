import * as yup from "yup";

const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

export const authFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email.")
    .matches(emailRegexp, "Invalid email format")
    .required("Email address is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .max(12, "Password must be no more, than 14 characters long.")
    .required("Pasword is required."),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match.")
    .required("Repeat password is required."),
});
