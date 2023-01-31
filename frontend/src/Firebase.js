// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvqS3NPj0bn4eWuiBBUiHF-fM3Iclh8xc",
  authDomain: "happyshare-1df0e.firebaseapp.com",
  projectId: "happyshare-1df0e",
  storageBucket: "happyshare-1df0e.appspot.com",
  messagingSenderId: "125971464537",
  appId: "1:125971464537:web:c942290e4b227eda948c48",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
