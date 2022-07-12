import styles from './AdminMainContainer.module.scss'

import React from 'react'

import AdminHeader from './../AdminHeader/AdminHeader';

function AdminMainContainer({children}) {

  

  return (
    <div className={styles.main_container_wrapper}>
      <div className={styles.header} >
        <AdminHeader/>
      </div>
      
      <div className={styles.content}>
          <div>
            {children}
          </div>
      </div>
    </div>
  )
}

export default AdminMainContainer