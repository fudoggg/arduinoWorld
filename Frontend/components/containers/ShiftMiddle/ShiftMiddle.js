import styles from './ShiftMiddle.module.scss'

import React from 'react'

function ShiftMiddle({children, left, right}) {
  return (
    <div className={styles.shift_middle}>
        <div className={styles.side_ways}>{left && left}</div>
        {children}
        <div className={styles.side_ways}>{right && right}</div>
    </div>
  )
}

export default ShiftMiddle