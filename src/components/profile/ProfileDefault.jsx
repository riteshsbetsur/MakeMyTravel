import React, { Fragment, useContext, useEffect, useState } from "react";
import Styles from "./_profile.module.css";
import { AuthContext } from "./../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../apis/Firebase";

const ProfileDefault = () => {
  let { authUser } = useContext(AuthContext);
  let { uid } = authUser === null ? "" : authUser;
  let [profile, setProfile] = useState("");

  let fetchData = async () => {
    // let userRef = doc(db, "users", uid);
    onSnapshot(doc(db, "users", uid), doc => {
      setProfile(doc.data());
    });
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(authUser);
  return (
    <div className={Styles.mainProfileBlock}>
      {authUser === "" ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/update-profile-photo ">
                <figure>
                  <img
                    src={authUser.photoURL || profile.photoURL}
                    alt={authUser.displayName || profile.displayName}
                  />
                </figure>
                <main>
                  <span className={Styles.cameraIcon}>
                    <FaCamera />
                  </span>
                </main>
              </Link>
            </aside>
            <footer>
              <h1>{authUser.displayName}</h1>
              <h4>{authUser.email}</h4>
            </footer>
            <aside className={Styles.profileUser}>
              <Fragment>
                <p>
                  <b>Gender :</b> {profile.gender}
                </p>
                <p>
                  <b>City :</b>
                  {profile.city}
                </p>
                <p>
                  <b>Address :</b>
                  {profile.address}
                </p>
              </Fragment>
            </aside>
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;
