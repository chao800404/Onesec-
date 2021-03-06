/** @format */

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  EmailAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";

initializeApp(firebaseConfig);
export const db = getFirestore();

export const snapshot = async (collections) =>
  await getDocs(collection(db, collections));

export const collectionToMap = (collectionSnapshot) => {
  let map = [];
  collectionSnapshot.forEach((collection) => {
    map.push(collection);
  });
  return map.map((collection) => {
    const { title, item, colorType, statement } = collection.data();
    return {
      title,
      item,
      id: collection.id,
      colorType,
      statement,
      routeName: encodeURI(title.toUpperCase()),
    };
  });
};

export const aboutPageToMap = (ref) => {
  let map = {};
  ref.forEach((shopPageData) => {
    const data = shopPageData.data();
    map = { ...map, data };
  });
  return map;
};

export const shopPageToMap = (ref) => {
  let map = [];
  ref.forEach((shopPageData) => {
    map = [...map, shopPageData.data()];
  });
  return map.reduce((acc, item) => {
    acc[item.sunGlassesType.toUpperCase()] = item;
    return acc;
  }, {});
};

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth();

const signInType = {
  google: (result) => GoogleAuthProvider.credentialFromResult(result),
  facebook: (result) => FacebookAuthProvider.credentialFromResult(result),
  email: (result) => EmailAuthProvider.credentialFromResult(result),
};

export const createUserProfileDoc = async (userData) => {
  if (!userData) return;
  const { uid, user } = userData;
  const userRef = doc(db, "user", uid);
  const useSnapshot = await getDoc(userRef);
  try {
    if (!useSnapshot.exists()) {
      const { displayName: name, email, photoURL } = user;
      await setDoc(doc(db, "user", uid), {
        name,
        email,
        photoURL: photoURL ? photoURL : null,
        creationDate: new Date(),
        id: uid,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const createOrderProfileDoc = async ({ order, id, customData }) => {
  await setDoc(doc(db, "order", id), { order, customData });
};

export const signInWithExpress = async ({ auth, provider, type }) => {
  signInWithRedirect(auth, provider);
  const result = await getRedirectResult(auth);
  signInType[type](result);
};

export const createUserWithEmail = async ({ auth, email, password, type }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(auth.currentUser);
};

export const signInWithEmail = async ({ auth, email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const sendRestEmail = ({ auth, email }) =>
  sendPasswordResetEmail(auth, email);

export const currentUser = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve({ uid, user });
      }
    });
  });

export const signOutAuth = () => signOut(auth);
