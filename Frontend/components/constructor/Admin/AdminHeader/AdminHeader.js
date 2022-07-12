import React from 'react'
import Router from 'next/router';

import styles from './AdminHeader.module.scss'

function AdminHeader() {

  return (
    <div className={styles.admin_header_wrapper}>
      <div className={styles.header}>
        <h1>Админка</h1>
        <span onClick={() => Router.push('/')}>Выход</span>
      </div>
    </div>
  )
}

export default AdminHeader