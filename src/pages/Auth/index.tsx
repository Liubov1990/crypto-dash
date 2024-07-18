import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authFormSchema } from "../../helpers/authFormSchema";
import { app } from "../../services/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import { login } from "../../redux/slices/authSlice";
import Button from "../../components/Button";
import { Input } from "../../styles/Common";
import * as S from "./styled";

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
  repeatPassword?: string | undefined;
}

const initialValue: IAuthForm = {
  email: "",
  password: "",
  repeatPassword: "",
};

function Auth() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [authType, setAuthType] = useState<"login" | "sign-up">("login");

  const isLogin = authType === "login";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IAuthForm>({
    defaultValues: initialValue,
    resolver: yupResolver(authFormSchema),
  });

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
      example: "********",
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

  useEffect(() => {
    if (Boolean(user)) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    reset();
    clearErrors();
  }, [isLogin]);

  const handleAuthType = () => {
    setAuthType((prev) => (prev === "login" ? "sign-up" : "login"));
  };

  const handleReturnHome = () => {
    navigate("/");
  };

  const handleFormSubmit = async (data: IAuthForm) => {
    const { email, password } = data;

    if (!isLogin) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (user && user.email)
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              photoURL: user.photoURL || null,
              displayName: user.displayName,
            })
          );

        return user;
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const errorCode = error.code;

          if (errorCode === "auth/email-already-in-use") {
            alert("Email already exists!");
          }

          console.error("Error:", errorCode);
        }
      }
    } else {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (user && user.email) {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              photoURL: user.photoURL || null,
              displayName: user.displayName,
            })
          );
        }

        return user;
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          const errorCode = error.code;

          if (errorCode === "auth/user-not-found") {
            alert("Sign up first!");
          }

          if (errorCode === "auth/invalid-credential") {
            alert("Check your credentials!");
          }

          console.error("Error:", errorCode);
        }
      }
    }
  };

  const loginWithGoogle = async (): Promise<User | null> => {
    const provider = new GoogleAuthProvider();
    try {
      const { user } = await signInWithPopup(auth, provider);

      if (user && user.email)
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL || null,
            displayName: user.displayName,
          })
        );
      return user;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code !== "auth/cancelled-popup-request") {
          console.error("Error:", error);
        }
      }

      return null;
    }
  };

  return (
    <S.AuthContainer>
      <S.AbsButton type="button" onClick={handleReturnHome}>
        <svg>
          <use xlinkHref="svg/sprite.svg#home" />
        </svg>
        <span>Home</span>
      </S.AbsButton>
      <S.AuthCard as="section" $padding="20px" $border="true">
        <form name="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <Button onClick={loginWithGoogle} type="button" $width="full">
            <span>Sign with</span>
            <S.BtnSVG>
              <use xlinkHref="svg/sprite.svg#google" />
            </S.BtnSVG>
          </Button>

          <S.Divider>
            <hr /> <span>or</span>
            <hr />
          </S.Divider>

          <div>
            {!isLogin
              ? inputsMap.map(
                  ({ typeName, example, fieldName, err, errMsg }, index) => (
                    <S.InputContainer key={index}>
                      <Input
                        type={typeName}
                        placeholder={example}
                        {...register(fieldName)}
                      />
                      {{ err } ? (
                        <S.ValidationError>{errMsg}</S.ValidationError>
                      ) : (
                        <></>
                      )}
                    </S.InputContainer>
                  )
                )
              : inputsMap
                  .filter((item) => item.fieldName !== "repeatPassword")
                  .map(
                    ({ typeName, example, fieldName, err, errMsg }, index) => (
                      <S.InputContainer key={index}>
                        <Input
                          type={typeName}
                          placeholder={example}
                          {...register(fieldName)}
                        />
                        {{ err } ? (
                          <S.ValidationError>{errMsg}</S.ValidationError>
                        ) : (
                          <></>
                        )}
                      </S.InputContainer>
                    )
                  )}
          </div>

          <Button type="submit" $width="full">
            <span>Sign {isLogin ? "in" : "up"} with Email</span>
          </Button>

          <S.SignOption>
            <span>
              {isLogin
                ? `Don't have an account yet?`
                : "Already have an account?"}
            </span>{" "}
            <S.AccentLink onClick={handleAuthType}>
              Sign {isLogin ? "up" : "in"}
            </S.AccentLink>
          </S.SignOption>

          <S.Divider>
            <hr /> <span>Forgot password?</span>
            <hr />
          </S.Divider>
        </form>
      </S.AuthCard>
    </S.AuthContainer>
  );
}
export default Auth;
