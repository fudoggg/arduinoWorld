import styles from './FeedbackCard.module.scss'

import React from 'react'
import moment from 'moment'
import Stars from './../../elements/Stars/Stars';

function FeedbackCard({ info }) {
  const rootClasses = [styles.feedback_wrapper]

  return (
    <div className={rootClasses.join(' ')}>
      {/* <div className={styles.top}> */}
      <div>
        <div className={styles.line}>
          {/* <h2>Анонимный покупатель</h2> */}
          <h2>{info.userId.name}</h2>
          <span>{moment(Number(info.createdAt)).format("DD.MM.YYYY")}</span>
        </div>
        <Stars rating={info.rate} />
      </div>

      <h1>Комментарий</h1>
      <p>{info.comment}</p>
    </div>
  )
}

export default FeedbackCard