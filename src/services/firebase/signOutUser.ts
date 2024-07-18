import { getAuth, signOut } from "firebase/auth";

const signOutUser = async (): Promise<void> => {
  try {
    const auth = getAuth();

    return await signOut(auth);
  } catch (error) {
    console.log("signOut fail");
  }
};

export default signOutUser;
