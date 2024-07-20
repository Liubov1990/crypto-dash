import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { User } from "firebase/auth";

const emailAlreadyExists = async (email: string | null): Promise<boolean> => {
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where("email", "==", email), limit(1))
  );

  return !querySnapshot.empty;
};

export const addUserToCollection = async ({ email, uid }: User) => {
  const isUserExists = await emailAlreadyExists(email);

  if (!isUserExists) {
    await setDoc(doc(db, "users", uid), { email });
  } else {
    return console.log("User exists in collection already!");
  }
};
