import styles from './Button.module.scss'

import React from 'react'

function Button({title, theme, onClick, disabled}) {
  const rootClasses = [styles.fill_block]

  const obj = {
    'basket': styles._basket,
    'active': styles._active,
    'main': styles._main,
    'danger': styles._danger,
    'disabled': styles._disabled,
    'cancel': styles._cancel,
  }

  theme && rootClasses.push(obj[theme])

  return (
    <div className={styles.button_wrapper} onClick={e => {!disabled ? onClick(e) : ''}}>
      <div className={rootClasses.join(' ')}>
        {
          <p>{title}</p>
        } 
      </div>
    </div>
  )
}

export default Button