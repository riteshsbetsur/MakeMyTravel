import React from "react";
import { Link } from "react-router-dom";
import Styles from "./_admin.module.css";

const User = props => {
  let {
    uid,
    displayName,
    firstname,
    lastname,
    email,
    address,
    gender,
    city,
    photoURL,
  } = props;
  return (
    <div className="userBlock">
      <figure>
        <img src={photoURL} alt={displayName} />
      </figure>
      <main>
        <h2>
          <b>Name :</b> {displayName}
        </h2>
        <p>
          <b>Gender : </b> {gender}
        </p>
        <p className={Styles.addressBlock}>
          <b>Address : </b>
          {address}
        </p>
        <p>
          <Link to={{ pathname: `/admin/${uid}` }} state={props}>
            View User
          </Link>
        </p>
      </main>
    </div>
  );
};

export default User;
