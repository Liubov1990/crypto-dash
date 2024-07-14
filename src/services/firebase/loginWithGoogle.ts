import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";

interface ILoginWithGoogle {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
}

interface IError {
  code: string;
}

const isLoginError = (candidate: unknown): candidate is IError => {
  if (candidate && typeof candidate === "object" && "code" in candidate) {
    return true;
  }
  return false;
};

const loginWithGoogle = async (): Promise<ILoginWithGoogle | null> => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const { user } = await signInWithPopup(auth, provider);

    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
  } catch (error: unknown) {
    if (isLoginError(error) && error.code !== "auth/cancelled-popup-request") {
      console.error(error);
    }
    return null;
  }
};

export default loginWithGoogle;
