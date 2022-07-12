import styles from './UserOrder.module.scss'

import React from "react"

import { SVG } from './../../../utils/const'

function UserOrder() {
    return (
        <div className={styles.userOrder}>
            <div className={styles.userOrder__info}>
                <div className={styles.userOrder__info_dateId}>
                    <h1>Заказ от 31 марта 2022</h1>
                    <p>05238723045809123</p>
                </div>
                <div className={styles.userOrder__info_priceAddres}>
                    <h1>2 000 ₽</h1>
                    <p>Адрес: Ваш адрес</p>
                </div>
            </div>
            <hr />
            <div className={styles.userOrder__status}>
                <div className={styles.userOrder__status_info}>
                    <h1>Получено</h1>
                    <p>Доставлено 1 апреля 2022 в 12:45</p>
                </div>
                <div className={styles.userOrder__status_image}>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                    <img src={SVG.logo}/>
                </div>
            </div>
        </div>
    )
}

export default UserOrder