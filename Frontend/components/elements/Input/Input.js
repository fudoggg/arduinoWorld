import styles from './Input.module.scss'

import React from 'react'

function Input({ value, title, type, placeholder, theme, onChange, ...props}) {
  const rootClasses = [styles.input_wrapper]

  const obj = {
    'undefined': '',
  }

  theme && rootClasses.push(obj[theme])

  return (
    <div className={rootClasses.join(' ')}>
      {title && <p>{title}</p>}
      <input type={type || 'text'} value={value} placeholder={placeholder} onChange={onChange} {...props}/>
    </div>
  )
}

export default Input