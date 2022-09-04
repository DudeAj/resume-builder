import { getAuth, onAuthStateChanged } from "firebase/auth";
import history from "./history";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    
    localStorage.setItem("user_id", uid);
    console.log("uid", uid);
    
    // ...
  } else {
    // User is signed out
    history.push("/login");
    // ...
    
  }
});
