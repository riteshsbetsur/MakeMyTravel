import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../apis/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
// import { toast } from 'react-toastify';

const ResetPassword = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
          setIsLoading(true);
          sendPasswordResetEmail(auth, email);
      //     toast.info(`Password reset link has been sent to ${email} address. Please  reset new password.`);
          window.alert(
            `Password reset link has been sent to ${email} address. Please reset new password.`
          );
    } catch (error) {
      // toast.error(error.code);
      window.alert(error.code);
    }
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                // id=""
                value={email}
                placeholder="Enter an email"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <aside>
                <span>Already have an account ?</span>
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </aside>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "Loading..." : "Reset Password"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default ResetPassword;
