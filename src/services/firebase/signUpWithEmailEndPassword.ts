import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "./firebaseConfig";
import { IUser, login } from "../../redux/slices/authSlice";
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  User,
} from "firebase/auth";
import { useAppDispatch } from "../../hooks/use-store";

interface ISignUpWithEmailAndPassword {
  auth: Auth;
  email: string;
  password: string;
  repeatPassword?: string;
}

export async function signUpWithEmailEndPassword({
  email,
  password,
}: ISignUpWithEmailAndPassword): Promise<User | undefined> {
  try {
    const dispatch = useAppDispatch();

    const auth = getAuth(app);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", user.uid), { email });

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
      if (errorCode === "auth/user-not-found") {
        alert("Sign up first!");
      }
      console.log(errorCode, "in auth");
    }
  }
}
