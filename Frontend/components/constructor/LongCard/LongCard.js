import styles from './LongCard.module.scss'

import React from 'react'
import Router from 'next/router';

import { SVG } from './../../../utils/const';
import { PRODUCTS } from '../../../utils/paths';
import Like from '../../elements/Like/Like';
import Grid from '../../containers/Grid/Grid';
import Button from './../../elements/Button/Button';
import Flex from './../../containers/Flex/Flex';
import Stars from './../../elements/Stars/Stars';
import { useMutation } from '@apollo/client';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../../query/carts/carts.mutation';
import { asyncAddToCart, asyncDeleteFromCart } from '../../../query/carts/carts.reducers';
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './../../../query/favorites/favorites.mutation';
import { asyncAddToFavorite, asyncDeleteFromFavorite } from '../../../query/favorites/favorites.reducers';

function LongCard({ info, isLike, isCart }) {
  const rootClasses = [styles.card_wrapper]

  const [add_to_cart] = useMutation(ADD_TO_CART)
  const [delete_from_cart] = useMutation(DELETE_FROM_CART)

  const [add_to_favorite] = useMutation(ADD_TO_FAVORITES)
  const [delete_from_favorite] = useMutation(DELETE_FROM_FAVORITES)
  const [like, setLike] = React.useState(isLike)
  const [cart, setCart] = React.useState(isCart)

  return (
    <div className={rootClasses.join(' ')} onClick={() => Router.push(`${PRODUCTS}/${info._id}`)}>

      <div className={styles.left}>
        <div className={styles.image}>
          <img src={info.img?.[0] && `${process.env.NEXT_PUBLIC_API_URL}${info.img?.[0]}` || SVG.logo} alt='icon'/>
        </div>
      </div>

      <div className={styles.card_info}>
        <div className={styles.middle_info}>
          <div>
            <p>{info.name}</p>
            <b>{info.description}</b>
          </div>

          <Grid length={1} gap={14}>
            <Stars rating={info.rating} />
            <Flex gap={20}><span>В наличии: {info.quantity} шт.</span><span>Доставим по городу: <i>завтра</i></span></Flex>
          </Grid>
        </div>

        <div className={styles.price_button_block}>
          <h1>{info.price} ₽</h1>
          {info.count && <p>Кол-во: {info.count}</p>}
          <div className={styles.button_block}>
            <Like
              onClick={(e) => {
                e.stopPropagation();
                setLike(old => !old)

                like ? 
                  asyncDeleteFromFavorite(delete_from_favorite, {productId: info._id})
                  :
                  asyncAddToFavorite(add_to_favorite, {productId: info._id})
              }} 
              active={like} 
            />
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                setCart(old => !old)

                cart ? 
                  asyncDeleteFromCart(delete_from_cart, {productId: info._id})
                  :
                  asyncAddToCart(add_to_cart, {productId: info._id})
              }}
              title={cart ? 'В корзине' : 'Купить'}
              theme={cart ? 'active' : ''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LongCard