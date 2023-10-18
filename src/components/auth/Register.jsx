import React,{useState} from "react";
import Styles from "./_auth.module.css";
import { useNavigate } from "react-router-dom";
import Auth_Image from "./authAssets/Register-auth.jpg"
// import { toast } from "react-toastify";
import {auth} from "../../apis/Firebase";
//built-in firebase function for authentication
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import md5 from 'md5';

const Register = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
  });
  let { username, email, password, confirmPassword, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        // toast.error("Password is not matched");
        window.alert("Password is not matched");
      }
      else {
        setState(isLoading=true)

        let userData = await createUserWithEmailAndPassword(auth, email, password);
        sendEmailVerification(userData.user);
        let message = `Email verification has been sent to ${email} address please verify...`;

        updateProfile(userData.user, {
          displayName: username,
          photoURL: `https://www.gravatar.com/avatar/${md5(email)}?q=identicon`,
        });

        // toast.success(message);
        window.alert(message);
        navigate("/login");

      }
      console.log(state);
    }
    catch (error) {
      console.log(error.code);
    }
//! resetting form fields after submission
    setState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLoading:false,
    });
  }
  return (
    <section id={Styles.authBlock}>
      <article>
        <div className={Styles.authLeft}>
          <h1>Register</h1>
          <figure>
            <img src={Auth_Image} alt="" />
          </figure>
        </div>
        <div className={Styles.authRight}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={username}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={confirmPassword}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button>{isLoading===true?"loading..." :"Register"}</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Register;
