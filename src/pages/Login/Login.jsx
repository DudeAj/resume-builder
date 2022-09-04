import React, { useEffect, useState } from "react";
import "./login.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import history from "../../utils/history";
import { useLocation } from "react-router-dom";
import Loginimage from "../../assets/login.png";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(false);
  const location = useLocation();

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    setProgress(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setProgress(false);
        history.push("/");
        // ...
      })
      .catch((error) => {
        setProgress(false);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const GoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(`Access token: ${credential}`);
        console.log(`result: ${result}`);
        history.push("/");
        
      })
      .catch((error) => {

        console.log("Error: ", error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(()=> {
    const user_id = localStorage.getItem('user_id');
    console.log('history', history.location)
    if(user_id) {
      // history.push("/");
      console.log("location")
    }

  },[]);

  return (
    <div className="container">
      <div className="subContainer">
        <div className="leftContainer">
          <img src={Loginimage} className="leftLoginImage" alt="login" />
        </div>
        <div className="registerForm">
          <h1>
            Pro
            <span>
              Res
              <br />
              ume
            </span>
          </h1>
          <h2>Nice to see you again</h2>
          <form onSubmit={LoginSubmit}>
            <div className="inputHolderContainer">
              <label>Username</label>
              <div className="inputHolder">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email or phone number"
                  className="inputbox"
                />
              </div>
            </div>

            <div className="inputHolderContainer">
              <label>Password</label>
              <div className="inputHolder">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="inputbox"
                />
                {showPass ? (
                  <Visibility className="icon" onClick={togglePass} />
                ) : (
                  <VisibilityOff className="icon" onClick={togglePass} />
                )}
              </div>
            </div>

            <div className="forgot-pass">
              <div className="forgotinput"></div>
              <p>Forgot password?</p>
            </div>

            <div className="inputHolderContainer">
              <button className="login-btn" type="submit">
                {progress ? (
                  <CircularProgress size={18} sx={{ color: "#fff" }} />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <div className="line"></div>
            <div className="inputHolderContainer">
              <button
                className="google-btn"
                type="button"
                onClick={GoogleLogin}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  alt="Login"
                />
                Login Via Google
              </button>
            </div>
          </form>
          <div className="new-already">
            <p>
              Don't have an account? <Link to="/register">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
