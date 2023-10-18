import React, { useState, useContext } from "react";
import Styles from "./_profile.module.css";
import { toast } from "react-toastify";
import { db, auth } from "../../apis/Firebase";
import { doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import { AuthContext } from "../../apis/AuthContextApi";

const AddProfileData = () => {
  let { authUser } = useContext(AuthContext);
  let { uid } = authUser === null ? "" : authUser;

  let [state, setState] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    city: "",
    address: "",
    isLoading: false,
  });
  let { firstname, lastname, gender, city, address, isLoading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    // console.log(state);

    try {
      let payload = { firstname, lastname, gender, city, address };
      //collection path (database location)
      let { displayName, photoURL, email } = authUser;
      let userCollectionRef = doc(db, "users", uid);

      //insert document into the collection
      await setDoc(userCollectionRef, {
        uid,
        displayName,
        photoURL,
        email,
        ...payload,
      });
      toast.success("User information is updated");
      // window.alert("User information is updated");
      window.location.assign("/profile");
      //   console.log(authUser?.uid);
    } catch (error) {
      toast.error(error.code);
      // window.alert("Error");
    }
  };

  return (
    <div className={Styles.mainProfileBlock}>
      <h1>Add Profile Details</h1>
      <form className={Styles.profileForm} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            id=""
            value={firstname}
            placeholder="First Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            id=""
            value={lastname}
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group" onChange={handleChange} value={gender}>
          <label htmlFor="gender">Gender</label>
          <span>
            <input type="radio" name="gender" value="Male" />
            Male
          </span>
          <span>
            <input type="radio" name="gender" value="Female" />
            Female
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group" id={Styles.textArea}>
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={address}
            cols="30"
            rows="2"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddProfileData;
