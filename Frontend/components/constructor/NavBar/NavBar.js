import styles from './NavBar.module.scss'

import React from 'react'

import { SVG } from './../../../utils/const';
import IconText from '../../containers/IconText/IconText';
import Router from 'next/router';
import { CATEGORIES } from './../../../utils/paths';

function  NavBar({list, current, path}) {
  const rootClasses = [styles.nav_bar_wrapper]

  return (
    <div className={rootClasses.join(' ')}>
      {/* <div className={styles.back}>
        <IconText text='Каталог' left={SVG.arrow.leftShort} onClick={() => Router.push('/delivery')}/>
      </div> */}
      <div className={styles.list}>
        {
          list.map((item, ind) => (
            <div key={ind} className={item.id == current ? styles.active : ''}><p onClick={() => Router.push(`${path}/${item.id}`)}> {item.name}</p></div>
          ))
        }
      </div>
    </div>
  )
}

export default NavBar

// alert('back')