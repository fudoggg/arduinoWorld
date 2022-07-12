import styles from './Row.module.scss'

import React from 'react'

function Row({ children, length, gridTemplateColumns, gap, onClick}) {
  const rootClasses = [styles.row_wrapper, onClick && styles.active]

  const columnTemp = {gridTemplateColumns: gridTemplateColumns ? gridTemplateColumns : `repeat(${length || 3}, 1fr)`}

  const view = {
    'undefined': '',
  }

  // theme && rootClasses.push(view[theme])

  return (
    <div className={rootClasses.join(' ')} style={{gap: gap, ...columnTemp}}>
        <div className={styles.row} onClick={onClick}>
            {children}
        </div>
    </div>
  )
}

export default Row