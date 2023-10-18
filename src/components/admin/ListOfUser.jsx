import React, { useState, useEffect } from "react";
import { db } from "../../apis/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import Moment from "react-moment";
import Styles from './_admin.module.css'
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai";

const ListOfUser = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      let fetchUsers = async () => {
        let userCollectionRef = collection(db, "users");
        let userData = await getDocs(userCollectionRef);
        let payload = userData.docs.map(user => {
          return { ...user.data(), id: user.id };
        });
        let filteredUser = payload.filter(user => user.role !== "admin");
        setUsers(filteredUser);
        // console.log(userData);
      };
      fetchUsers();
    } catch (error) {
      toast.error(error.code);
    }
  }, []);
  return (
    <div className={Styles.card}>
              <h2><span><AiOutlineUserSwitch/></span>
                    Users</h2>
      <p>Users : <span>{users.length > 0 && users.length}</span> </p>
      <p>
        <Moment format="DD/MMM/YYYY">{new Date()}</Moment>
      </p>
      <p>
        <Link to="/admin/users">View Users</Link>
      </p>
    </div>
  );
};

export default ListOfUser;
