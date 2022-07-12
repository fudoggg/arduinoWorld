import styles from './ProductInfo.module.scss'

import React from 'react'
import { SVG } from './../../../utils/const';
import Flex from '../../containers/Flex/Flex';
import Like from '../../elements/Like/Like';
import Button from '../../elements/Button/Button';
import Сounter from '../../elements/Сounter/Сounter';

function ProductInfo({titlePage, children}) {
  const [tab, setTab] = React.useState(0)

  titlePage = [
    'Описание',
    'Характеристики',
    'Отзывы',
  ]

  return (
    <div className={styles.product_info_wrapper}>
      <div className={styles.switch_tab}>
        {
          titlePage.map((title,ind) => (
            <div key={ind} className={styles.tab + ' ' + (tab == ind ? styles.active : '')}>
              <h1 onClick={() => setTab(ind)}>{title}</h1>
              <div/>
            </div>
          ))
        }
      </div>

      <div className={styles.description}>
        {children.map((child, ind) => ind == tab && child)}
      </div>
    </div>
  )
}

export default ProductInfo