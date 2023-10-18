import React, { useState } from "react";
import Styles from "./_auth.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";
import { auth } from "../../apis/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

const Login = () => {
  let navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [showPassword, setShowPassword] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let togglePassword = () => {
    setToggle(!toggle);
    setShowPassword(!showPassword);
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let userData = await signInWithEmailAndPassword(auth, email, password);
      if (userData.user.emailVerified === true) {
        navigate("/");
        toast.success(`Successfully ${email} logged in`);
        // window.alert(`Successfully ${email} logged in`);
      } else {
        toast.error("Email not yet verified");
        // window.alert("Email not verified");
      }
    } catch (error) {
      toast.error(error.code);
      // window.alert(error.code);
    }
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };
  return (
    <section id={Styles.authLoginBlock}>
      <article>
        <div className="container">
          <h1>Login</h1>
          <Link to="/phone-auth" className={Styles.phoneAuth}>Login with Phone Number</Link>
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
              <label htmlFor="password">Password</label>
              <input
                type={showPassword === true ? "text" : "password"}
                // id=""
                value={password}
                placeholder="Enter password"
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="on"
              />

              <span className={Styles.eyeIcon} onClick={togglePassword}>
                {showPassword === true ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="form-group">
              <aside>
                <span>Don't have an account ?</span>
                <span>
                  <Link to="/register">Register</Link>
                </span>
              </aside>
              <p>
                <Link to="/reset-password">Forgot Password</Link>
              </p>
            </div>
            <div className="form-group">
              <button>{isLoading === true ? "Loading..." : "Login"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
