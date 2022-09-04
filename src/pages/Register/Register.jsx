import React, { useState } from "react";
import "./register.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";

import registerImage from "../../assets/login.png";
import history from "../../utils/history";
const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showRePass, setShowRePass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const toggleRePass = () => {
    setShowRePass(!showRePass);
  };

  const CreateUser = (e) => {
    e.preventDefault();
    if (password !== cPassword) {
      console.log("Password did not match");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          history.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
      console.log(email, password, cPassword);
    }
  };

  return (
    <div className="container">
      <div className="subContainer">
        <div className="leftContainer">
          <img src={registerImage} className="leftImage" />
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
          <h2>Make your Account</h2>
          <form onSubmit={CreateUser}>
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

            <div className="inputHolderContainer">
              <label>Re-Password</label>
              <div className="inputHolder">
                <input
                  type={showRePass ? "text" : "password"}
                  value={cPassword}
                  onChange={(e) => setcPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="inputbox"
                />
                {showRePass ? (
                  <Visibility className="icon" onClick={toggleRePass} />
                ) : (
                  <VisibilityOff className="icon" onClick={toggleRePass} />
                )}
              </div>
            </div>

            <div className="forgot-pass">
              <div className="forgotinput"></div>

              <p>Forgot password?</p>
            </div>

            <div className="inputHolderContainer">
              <button className="login-btn" type="submit">
                Sign Up
              </button>
            </div>
            <div className="line"></div>
            <div className="inputHolderContainer">
              <button className="google-btn" type="button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="register"/>
                Login Via Google
              </button>
            </div>
          </form>
          <div className="new-already">
            <p>
              Already have an account? <Link to="/login">Sign in now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
