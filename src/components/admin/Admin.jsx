import React from 'react';
import AdminMain from './AdminMain';
import AdminSidebar from './AdminSidebar';
import Styles from './_admin.module.css'

const Admin = () => {
  return (
    <section id={Styles.adminPanel}>
      <article>
        <AdminSidebar />
        <AdminMain/>
      </article>
    </section>
  )
}

export default Admin
