import styles from './FeedbackForm.module.scss'

import React from 'react'
import { useMutation } from '@apollo/client';
import useObject from './../../../hooks/useObject';
import Cookies from 'js-cookie'
import Flex from './../../containers/Flex/Flex';
import Stars from '../../elements/Stars/Stars';
import Textarea from './../../elements/Textarea/Textarea';
import { asyncCreateFeedback } from './../../../query/feedbacks/feedbacks.reducers';
import { CREATE_FEEDBACK } from '../../../query/feedbacks/feedbacks.mutation';

function FeedbackForm({active, setActive, productId}) {
  const [feedback_create] = useMutation(CREATE_FEEDBACK)
  const {value, changeValue} = useObject({rate: 0})

  return (
    <div className={styles.feedback_form_wrapper} onClick={() => setActive(false)}>
      <div 
        className={styles.feedback_form_window + ' ' + styles.active} 
        onClick={e => {
            e.stopPropagation();
        }} 
      >
        <h1>Ваш отзыв</h1>
        <Flex gap={0} style={{justifyContent: "center"}}>
          <div className={styles.div_input}>
            <Stars key={1} stars={value.rate} changeStars={changeValue} feedback/>
            <Textarea placeholder='Коментарий' onChange={e => changeValue({comment: e.target.value})}/>
          </div>
        <div className={styles.btn} onClick={() => {
          asyncCreateFeedback(feedback_create, {...value, userId: Cookies.get('userId'), productId}, () => setActive(false), () => alert('Ошибка, не удалось оставить отзыв'))
        }}>Отправить</div>
        </Flex>
      </div>
    </div>
  )
}

export default FeedbackForm