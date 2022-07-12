import styles from './Table.module.scss'

import React from 'react'
import Row from '../Row/Row'

function Table({ arrTitle, children, gridTemplateColumns, length, gap }) {
  const rootClasses = [styles.table_wrapper]

  const columnTemp = {gridTemplateColumns: gridTemplateColumns ? gridTemplateColumns : `repeat(${length || 3}, 1fr)`}

  const view = {
    'undefined': '',
  }

  // theme && rootClasses.push(view[theme])

  return (
    <div className={rootClasses.join(' ')}>
      <div className={styles.header_table} style={{gap: gap, ...columnTemp}}>
          {
            arrTitle.map((elem, ind) => (
              <div key={ind}>{elem}</div>
            ))
          }
      </div>
      <div>
          {children}
      </div>   
    </div>
  )
}

export default Table