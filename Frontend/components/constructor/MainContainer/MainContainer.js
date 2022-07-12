import styles from './MainContainer.module.scss'

import React from 'react'

import UpperHeader from './../UpperHeader/UpperHeader';
import Header from './../Header/Header';
import Footer from '../Footer/Footer';

function MainContainer({children, isNavbar}) {
  return (
    <div className={styles.main_container_wrapper}>
      <div className={styles.header} >
        <UpperHeader/>
        <Header/>
      </div>
      
      <div className={styles.content + ' ' + (isNavbar ? styles._whithNavBar : '')}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainContainer