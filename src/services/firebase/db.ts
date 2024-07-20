import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
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
  }
};

export const updateUserPreferences = async ({ uid }: User, config: any) => {
  await updateDoc(doc(db, "users", uid), { config: { ...config } });
};

export const getUserConfig = async ({ uid }: User) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()?.config || null;
  }

  return null;
};
