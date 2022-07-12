import React from 'react'
import MainContainer from '../../components/constructor/MainContainer/MainContainer'

function contacts() {
  return (
    <MainContainer>
      <h1>Контакты</h1>
      <h3>Наши контакты</h3>
        <p>Связаться возможно несколькими способами:</p>
        <br/>
        <ul>
          <li>По номеру 8 912 340 3720;</li>
          <li>По электронной почте soniksol@mail.ru, указав номер Вашего заказа;</li>
          {/* <li>Через раздел «Обратная связь» на сайте.</li> */}
        </ul>
    </MainContainer>
  )
}

export default contacts