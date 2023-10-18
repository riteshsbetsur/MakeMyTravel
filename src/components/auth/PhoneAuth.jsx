import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../apis/Firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
// import { toast } from 'react-toastify';
import Cotter from "cotter";

const PhoneAuth = () => {
  let navigate = useNavigate();
  let [phone, setPhone] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let reCaptchaVerifier = new RecaptchaVerifier(
        "captcha-container",
        {
          size: "invisible",
          callback: response => {
            console.log(response);
          },
        },
        auth
      );
      let sendOtp = signInWithPhoneNumber(auth, phone, reCaptchaVerifier);
      let confirmationMessage = window.prompt("Enter OTP");
      (await sendOtp).confirm(confirmationMessage);

      navigate("/login");
    } catch (error) {
      // toast.error(error.code);
      window.alert(error.code);
    }
    setPhone("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login with Phone Number</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                // id=""
                value={phone}
                placeholder="Enter Valid Phone Number"
                onChange={e => setPhone(e.target.value)}
                required
              />
            </div>

            <div id="captcha-container"></div>

            <div className="form-group">
              <aside>
                <span>Already have an account ?</span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "Loading..." : "Send OTP"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
