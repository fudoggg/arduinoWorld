import styles from '../../styles/pages/profile/Index.module.scss'

import React from 'react'
import MainContainer from '../../components/constructor/MainContainer/MainContainer'
import Grid from '../../components/containers/Grid/Grid'
import ProfileInfo from './../../components/constructor/ProfileInfo/ProfileInfo';

function Index() {
  return (
    <MainContainer>
      <div className={styles.profile_wrapper}>
        <ProfileInfo />
      </div>
    </MainContainer>

  )
}

export default Index