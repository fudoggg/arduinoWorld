import styles from './CheckedBlock.module.scss'

import React from 'react'

function CheckedBlock({active, setActive, title, theme, name, obj}) {
  const rootClasses = [styles.checked_block_wrapper]

  const view = {
    'undefined': '',
  }

  theme && rootClasses.push(view[theme])

  return (
    <div className={rootClasses.join(' ')}>
      {
        Object.keys(obj).map((key) => (
          <label 
            key={key} 
            className={active == key ? styles.active : ''} 
          >
            <input 
              key={key} 
              type='radio' 
              name={name || 'default'} 
              checked={active == key}
              onChange={() => setActive(key)}
            />
              
              {obj[key]}
            </label>
        ))
      }
    </div>
  )
}

export default CheckedBlock