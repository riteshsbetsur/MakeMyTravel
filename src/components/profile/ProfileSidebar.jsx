import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./_profile.module.css";

const ProfileSidebar = () => {
  return (
    <div className={Styles.sidebarProfile}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/profile"
              activeClassName="active"
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile/update-profile-photo"
              activeClassName="active"
            >
              Update Profile Photo
            </NavLink>
          </li>
          <li>
            <NavLink to="/update-phone-number" activeClassName="active">
              Update Phone Number
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;
