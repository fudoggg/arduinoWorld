import styles from './List.module.scss'

import React from 'react'
import Flex from './../Flex/Flex';

function List({arr}) {
  return (
    <div className={styles.list}>
      <Flex gap={16}>
        {
          // arr.map((elem, ind) => )
        }
      </Flex>
    </div>
  )
}

export default List