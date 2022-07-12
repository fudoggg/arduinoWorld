import styles from './IconText.module.scss'
import React from 'react'

function IconText({text, children, left, right, onClick, ...props}) {
  return (
    <div className={styles.icon_text} onClick={onClick} {...props}>
        {left && children}
        <p>{text}</p>
        {right && <img src={right} />}
    </div>
  )
}

export default IconText