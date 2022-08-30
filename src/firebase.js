import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbLNjBp5rZ59kJ9urI9RfK6cTx--MYh3k",
  authDomain: "resume-builder-79b84.firebaseapp.com",
  databaseURL: "https://resume-builder-79b84-default-rtdb.firebaseio.com",
  projectId: "resume-builder-79b84",
  storageBucket: "resume-builder-79b84.appspot.com",
  messagingSenderId: "1071707753744",
  appId: "1:1071707753744:web:1c11e9e89121eee76da995",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
