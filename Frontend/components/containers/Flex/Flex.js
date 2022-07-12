import styles from './Flex.module.scss'

import React from 'react'

function Flex({children, theme, position, gap, style, ...props}) {
  const rootClasses = [styles.flex]

  const obj = {
    'between': 'between'
  }

  const objTheme = {
    'main': '_main'
  }

  rootClasses.push(styles[obj[position]])
  rootClasses.push(styles[objTheme[theme]])

  return (
    <div className={rootClasses.join(' ')} style={{gap: gap, ...style}} {...props}>
        {children}
    </div>
  )
}

export default Flex