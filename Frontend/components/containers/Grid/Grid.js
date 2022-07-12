import styles from './Grid.module.scss'

import React from 'react'

function Grid({children, gap, length, gridTemplateColumns, theme, style}) {
  const rootClasses = [styles.grid]

  const columnTemp = {gridTemplateColumns: gridTemplateColumns ? gridTemplateColumns : `repeat(${length || 3}, 1fr)`}

  const obj = {
    'inline': styles.inline,
    undefined: ''
  }

  rootClasses.push(obj[theme])


  return (
    <div className={rootClasses.join(' ')} style={{gap: gap, ...columnTemp, ...style}}>
        {children}
    </div>
  )
}

export default Grid