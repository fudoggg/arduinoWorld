import styles from './UserFeedback.module.scss'

import React from 'react'
import Stars from '../../elements/Stars/Stars'
import Button from '../../elements/Button/Button'

import { SVG } from './../../../utils/const';

function UserFeedback({ userFeedbackList }) {
    return (
        <div className={styles.userFeedbackCard}>
            <div className={styles.userFeedbackCard__product}>
                <div className={styles.product}>
                    <div className={styles.product__image}>
                        <img src={SVG.logo}/>
                    </div>
                    <div className={styles.product__info}>
                        <p>Arduino MKR Zero, microSD карта, SPI, разработка звука/музыки (Оригинал)</p>
                        {userFeedbackList && <Stars rating={4.5}/>}
                        <h1>2 000 ₽</h1>
                    </div>
                    {
                        userFeedbackList && (
                            <div className={styles.product__button}>
                                <Button title={'Перейти к товару'} />
                            </div>)
                    }
                    
                </div>
            </div>
            <div className={styles.userFeedbackCard__feedback}>
                <div className={styles.feedback}>
                    <Stars rating={4}/>
                    <div className={styles.feedback__text}>
                        <p>Содержание отзыва ыыыыыыыыыыыыыыыыыыыыыыыы ыыыыыыыыыыыы</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default UserFeedback