import React from "react";
import { useLocation } from "react-router-dom";
import Styles from "./_admin.module.css";

const UserDetails = props => {
  let location = useLocation();
  let {
    displayName,
    firstname,
    lastname,
    city,
    uid,
    gender,
    email,
    address,
    photoURL,
  } = location.state;
  return (
    <section className={Styles.userDetails}>
      <article>
        <aside className={Styles.userPhoto}>
          <img src={photoURL} alt="" />
        </aside>
        <aside className={Styles.userDescription}>
          <header>
            <h1>{displayName}</h1>
          </header>
          <main>
            <ul>
              <li>
                <b>First Name : </b>
                {firstname}
              </li>
              <li>
                <b>Last Name : </b>
                {lastname}
              </li>
              <li>
                <b>Email : </b>
                {email}
              </li>
              <li>
                <b>Gender : </b>
                {gender}
              </li>
              <li>
                <b>City : </b>
                {city}
              </li>
              <li>
                <b>Address : </b>
                {address}
              </li>
            </ul>
          </main>
          <footer></footer>
        </aside>
      </article>
    </section>
  );
};

export default UserDetails;
