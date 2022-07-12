import styles from './Select.module.scss'

import React from 'react'

function Select({ children, title, value, placeholder, theme, onChange, ...props}) {
  const rootClasses = [styles.input_wrapper]

  const obj = {
    'undefined': '',
  }

  theme && rootClasses.push(obj[theme])

  return (
    <div className={rootClasses.join(' ')}>
      {title && <p>{title}</p>}
      <select value={value} placeholder={placeholder} onChange={onChange} {...props}>
        {children}
      </select>
    </div>
  )
}

export default Select