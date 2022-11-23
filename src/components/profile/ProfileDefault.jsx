import React, { Fragment, useContext } from "react";
import Styles from "./_profile.module.css";
import { AuthContext } from "./../../apis/AuthContextApi";
import Spinner from "../../pages/Spinner";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

const ProfileDefault = () => {
  let { authUser, isLoading } = useContext(AuthContext);
  console.log(authUser);
  return (
    <div className={Styles.mainProfileBlock}>
      {authUser === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1>Profile</h1>
          <article>
            <aside className={Styles.asideIcon}>
              <Link to="/profile/update-profile-photo">
                <figure>
                  <img src={authUser.photoURL} alt={authUser.displayName} />
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
          </article>
        </Fragment>
      )}
    </div>
  );
};

export default ProfileDefault;
