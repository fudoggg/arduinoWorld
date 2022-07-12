import styles from './Сounter.module.scss'

import React from 'react'

function Сounter({value, changeValue, max}) {
  const rootClasses = [styles.сounter_wrapper]

  // const [count, setCount] = React.useState(0)

  return (
    <div className={rootClasses.join(' ')}>
      {/* <input type={'button'} value='-' onClick={() => alert('!')}/> */}
      <input type={'button'} value='-' onClick={() => changeValue(old => old-- > 0 && old--)}/>
      <input type={'number'} value={value || 1} onChange={e =>  e.target.value > 0 && e.target.value <= max && changeValue(e.target.value)}/>
      <input type={'button'} value='+' onClick={() => changeValue(old => old+1 <= max ? old+1 : old)}/>
    </div>
  )
}

export default Сounter