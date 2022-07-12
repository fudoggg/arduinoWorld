import styles from './OrderBasket.module.scss'

import React from 'react'

import Router from 'next/router';
import { CATEGORIES, ORDER } from './../../../utils/paths';
import Button from '../../elements/Button/Button';
import { useMutation } from '@apollo/client';
import { CLEAR_CART_BY_USER_ID } from '../../../query/carts/carts.mutation';
import { asyncClearCartByUserID } from './../../../query/carts/carts.reducers';

function OrderBasket({count, sum, refetch}) {
  const rootClasses = [styles.order_basket_wrapper]

  const [clear_cart] = useMutation(CLEAR_CART_BY_USER_ID)

  return (
    <div className={rootClasses.join(' ')}>
      <div className={styles.white_block}>
        <div className={styles.title}>
          <h1>Всего</h1>
        </div>
        <div className={styles.list}>
          <p>Кол-во товаров: {count}</p>
          <h2> {sum} ₽</h2>
          <Button title='Оформить заказ' theme='basket' onClick={() => Router.push(ORDER)}/>
        </div>
      </div>
      <p onClick={() => {
        if (confirm('Очистить корзину ?')) {asyncClearCartByUserID(clear_cart); refetch?.()}}}>Очистить корзину</p>
    </div>
  )
}

export default OrderBasket