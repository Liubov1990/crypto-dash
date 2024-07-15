import { FieldError, useForm } from "react-hook-form";
import Button from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { authFormSchema } from "../../helpers/authFormSchema";
import { useState } from "react";

interface IInputsMap {
  typeName: string;
  example: string;
  fieldName: "password" | "repeatPassword" | "email";
  err: FieldError | undefined;
  errMsg: string | undefined;
}

export interface IAuthForm {
  email: string;
  password: string;
  repeatPassword: string;
}

function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthForm>({
    resolver: yupResolver(authFormSchema),
  });

  const [authType, setAuthType] = useState<"login" | "sign-up">("login");

  const isLogin = authType === "login";

  const inputsMap = [
    {
      typeName: "email",
      example: "email@example.com",
      fieldName: "email",
      err: errors.email,
      errMsg: errors.email?.message,
    },
    {
      typeName: "password",
      example: "******",
      fieldName: "password",
      err: errors.password,
      errMsg: errors.password?.message,
    },
    {
      typeName: "password",
      example: "repeat password",
      fieldName: "repeatPassword",
      err: errors.repeatPassword,
      errMsg: errors.repeatPassword?.message,
    },
  ] as IInputsMap[];

  const handleAuthType = () => {
    setAuthType((prev) => (prev === "login" ? "sign-up" : "login"));
  };

  const handleFormSubmit = (formData: IAuthForm) => {
    console.log(formData);
  };

  return (
    <div>
      <div>
        <form name="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <div>
            <Button type="button">
              <svg>
                <use xlinkHref="svg/sprite.svg#google" />
              </svg>
              <span>oogle</span>
            </Button>
          </div>

          <div>
            <hr /> <span>or</span>
            <hr />
          </div>

          <div>
            {inputsMap.map(
              ({ typeName, example, fieldName, err, errMsg }, index) => (
                <div key={index}>
                  <input
                    type={typeName}
                    placeholder={example}
                    {...register(fieldName)}
                  />
                  {{ err } ? <span>{errMsg}</span> : <></>}
                </div>
              )
            )}
          </div>

          <Button type="submit">
            <span>Sign {isLogin ? "in" : "up"} with Email</span>
          </Button>

          <div>
            <span>
              {isLogin
                ? `Don't have an account yet?`
                : "Already have an account?"}
            </span>
            <span onClick={handleAuthType}>Sign {isLogin ? "up" : "in"}</span>
          </div>

          <div>
            <hr />
            <Button type="button">Forgot password</Button>
            <hr />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Auth;
