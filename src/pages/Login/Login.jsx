import React, { useState } from "react";
import "./login.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import history from "../../utils/history";
import Loginimage from "../../assets/login.png";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePass = () => {
    setShowPass(!showPass);
  };

  const LoginSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

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
              <div className="forgotinput">
                <input type="checkbox" id="vehicle1" />
                <label htmlFor="vehicle1"> Remember me</label>
              </div>
              <p>Forgot password?</p>
            </div>

            <div className="inputHolderContainer">
              <button className="login-btn" type="submit">
                Sign In
              </button>
            </div>
            <div className="line"></div>
            <div className="inputHolderContainer">
              <button className="google-btn" type="button">
                <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504739.png?token=exp=1647248416~hmac=250a11fda401903cea9797a6fbc8f468" alt="user" />
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
