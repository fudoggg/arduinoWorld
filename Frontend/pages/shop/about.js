import styles from '../../styles/pages/profile/about.module.scss'

import React from 'react'
import MainContainer from '../../components/constructor/MainContainer/MainContainer'

function about() {
  return (
    <MainContainer>
      <div className={styles.about_wrapper}>
        <h1>О нас</h1>
        <h2>Arduino world</h2>
        <p>Один из основных крупных ритейлеров на Российском рынке по продаже DIY электроники. Мы осуществляем оптовую и розничную продажу мини-компьютеров, микроконтроллеров, электронных компонентов, модулей, датчиков, сенсоров для робототехники, умных домов, автоматизаций в производстве, образования и др.</p>

        <p>Среди наших клиентов: Яндекс, Mail.ru Group, Ростелеком, Kaspersky, РЖД, Сколково, Концерн Калашников, Матч ТВ, Почта России, Кондитерский концерн Бабаевкий, Aviasales, Аквафор, Wildberries, Delivery Club, Атол, Госкорпорация «Росатом», Европейская медиагруппа ЕМГ (Европа Плюс, Дорожное радио, Ретро FM, Радио 7 на семи холмах, Новое Радио), университеты МГТУ им. Н. Э. Баумана, МГУ им. М.В. Ломоносова, НИУ Высшая школа экономики и др.</p>
      </div>
    </MainContainer>
  )
}

export default about