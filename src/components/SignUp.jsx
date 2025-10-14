import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      {/* Sign up page start */}
      <div className="signUpSection">
        <div className="signUpSectionLogo">
          <img src="./Img/navLogo.com.png" alt={"nav-logo"} />
        </div>
        <div className="signUpSectionForm">
          <form action="#">
            <h3>Create Your Account</h3>
            <label htmlFor="username">Email or phone number </label>
            <input type="text" name="username" />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" name="phoneNumber" />
            <label htmlFor="password">password</label>
            <input type="text" name="password" />
            <span>
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </span>
            {/* <Link to={''}>forgot password?</Link> */}
            <input type="submit" defaultValue="verify" />
          </form>
          <hr />
          <h6>
            <b>Buying for work?</b>
          </h6>
          <Link to="#">Create a free business account</Link>
        </div>
        <div className="signUpSectionAlreadyHaveAccount">
          <div className="alreadyHaveAccount">
            <hr />
            <span >Already have an account ?</span>
            <br />
            <br />
          </div>
          <Link to={"/login"} className="signInBtn">
            Sign In
          </Link>
        </div>
      </div>
      {/* sign up page End */}
    </>
  );
};

export default SignUp;
