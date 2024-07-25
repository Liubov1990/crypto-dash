import * as yup from "yup";

const emailRegexp =
  /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
const passwordRegexp =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/;

export const getAuthFormSchema = (isSignInForm: boolean) =>
  yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format.")
      .matches(emailRegexp, "Email address is required.")
      .required(),
    password: yup
      .string()
      .matches(
        passwordRegexp,
        "Password must contain one digit from 0 to 6, one lowercase letter, one uppercase letter, one special character, no spaces and at least 6 characters long."
      )
      .required("Pasword is required."),
    ...(!isSignInForm && {
      repeatPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords don't match.")
        .required("Repeat password is required."),
    }),
  });
