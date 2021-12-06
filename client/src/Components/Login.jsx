import React, { useState } from "react";
import avatar from "../Images/avatar.svg";
import "../Css/Login.css";
import {
  EnvelopeFill,
  LockFill,
  Google,
  Linkedin,
  Facebook,
  EyeSlashFill,
  EyeFill,
  PersonFill,
} from "react-bootstrap-icons";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPwd, setVisibility] = useState(false);

  const emailHandler = (event) => {
    setUserData({
      ...userData,
      email: event.target.value,
    });
  };

  const passwordHandler = (event) => {
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const toggleVisibility = () => {
    showPwd ? setVisibility(false) : setVisibility(true);
  };

  return (
    <div className="main-container">
      <div className=" form-container text-center m-auto">
        <div className="left-container">

        </div>
        <div className="right-container">
          <div className="title my-3">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="input-container">
            <form className="d-flex flex-column align-items-center">
              <div className="form-group my-2">
                <div className="input-icon">
                  <span>
                    <PersonFill />
                  </span>
                </div>
                <div className="input-control">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="register number"
                    onChange={emailHandler}
                  ></input>
                </div>
              </div>
              <div className="form-group my-2">
                <div className="input-icon">
                  <span>
                    <LockFill />
                  </span>
                </div>
                <div className="input-control">
                  <input
                    type={showPwd ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={passwordHandler}
                  ></input>
                </div>
                <div className="eye-icon">
                  <span onClick={toggleVisibility}>
                    {showPwd ? <EyeFill /> : <EyeSlashFill />}
                  </span>
                </div>
              </div>
              <div className="forget-password">
                <a href="/register">Forget password?</a>
              </div>
              <div className="submit-btn my-2">
                <button type="button" className="text-white">
                  Login
                </button>
              </div>
              {/* <div className="sign-up">
            <span>
              Don't have an account?<a href="/register">&nbsp;Sign up</a>
            </span>
          </div>
          <div className="social-login d-flex">
            <div className="google-icon">
              <Google className="mx-3" />
            </div>
            <div className="linkedin-icon">
              <Linkedin className="mx-3" />
            </div>
            <div className="facebook-icon">
              <Facebook className="mx-3" />
            </div>
          </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
