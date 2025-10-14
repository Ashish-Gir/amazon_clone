import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    name: "",
    password: "",
  });

  const [msg, setmsg] = useState("");

  const handleLoginData = async (e) => {
    e.preventDefault();

    await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginFormData.name,
        password: loginFormData.password,
        // expiresInMins: 30, // optional, defaults to 60
      }),
      // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message && res.message === "Invalid credentials") {
          setmsg(res.message);
        } else {
          localStorage.setItem("accessToken", res.accessToken);
          if(localStorage.getItem('previousPath')){
            navigate(localStorage.getItem('previousPath'));
          }else{
            navigate("/account");
          }
        }
      });
  };

  return (
    <>
      {/* login page start */}
      <div className="loginSection">
        <div className="loginSectionLogo">
          <img src="./Img/navLogo.com.png" alt={"nav-logo"} />
        </div>
        <div className="loginSectionForm">
          <form onSubmit={handleLoginData}>
            {msg === "Invalid credentials" ? (
              <h1
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "20px",
                  borderRadius: "10px",
                }}
                className="alert alert-info"
              >
                {msg}
              </h1>
            ) : (
              <></>
            )}
            <h3>Log in</h3>
            <label htmlFor="userId">Username, Email or phone number </label>
            <input
              type="text"
              name="userId"
              onChange={(e) => {
                setloginFormData({ ...loginFormData, name: e.target.value });
              }}
              placeholder="abcd@gmail.com"
            />
            <label htmlFor="password">password </label>
            <input
              type="password"
              name="password"
              onChange={(e) => {
                setloginFormData({
                  ...loginFormData,
                  password: e.target.value,
                });
              }}
              placeholder="XXXXXX"
            />
            <input type="submit" />
            <span>
              By continuing, you agree to Amazon's
              <Link to="#">Conditions of Use</Link> and
              <Link to="#">Privacy Notice.</Link>
            </span>
            <Link to="#">forgot password?</Link>
          </form>
        </div>
        <div className="loginSectionCreateNewAccount">
          <div className="newToAmazon">
            <br />
            <hr />
            <span>New to Amazon ?</span>
            <br />
          </div>
          <Link to="/signUp" className="signUpBtn">
            Create your Amazon account{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
