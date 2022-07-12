import styles from './Textarea.module.scss'

import React from 'react'

function Textarea({title, type, placeholder, theme, onChange, ...props}) {
  const rootClasses = [styles.input_wrapper]

  const obj = {
    'undefined': '',
  }

  theme && rootClasses.push(obj[theme])

  return (
    <div className={rootClasses.join(' ')}>
      <textarea placeholder={placeholder} onChange={onChange} {...props}></textarea>
    </div>
  )
}

export default Textarea