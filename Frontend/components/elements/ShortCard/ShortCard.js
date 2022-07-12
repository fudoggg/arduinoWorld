import styles from './ShortCard.module.scss'

import React from "react"

import { SVG } from './../../../utils/const';

function ShortCard() {
    return (
        <div className={styles.shortCard}>
            <div className={styles.shortCard__content}>
                <img src={SVG.logo} alt=''/>
                <div className={styles.shortCard__content__info}>
                    <p>Arduino MKR Zero, microSD карта, SPI, разработка звука/музыки (Оригинал)</p>
                    <h1>2 000 ₽</h1>
                </div>
            </div>
        </div>
    )
}

export default ShortCard