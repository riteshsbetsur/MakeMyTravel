import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import Styles from "./_admin.module.css";
import { BiHotel } from "react-icons/bi";

const AdminSidebar = () => {
  return (
    <aside className={Styles.adminSidebar}>
      <nav>
        <Link to="/admin/dashboard">
          <span className={Styles.icons}>
            <AiOutlineDashboard />
          </span>
          <span className={Styles.content}>Dashboard</span>
        </Link>
      </nav>
      <main>
        <Link to="/admin/add-hotel">
          <span className={Styles.icons}>
            <BiHotel />
          </span>
          <span className={Styles.content}>Add Hotels</span>
        </Link>
      </main>
      <footer></footer>
    </aside>
  );
};

export default AdminSidebar;
