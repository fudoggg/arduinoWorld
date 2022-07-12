import styles from './Card.module.scss'
import React from 'react'
import Router from 'next/router';
import { SVG } from './../../../utils/const';
import Like from '../../elements/Like/Like';
import { PRODUCTS } from '../../../utils/paths';
import Flex from './../../containers/Flex/Flex';
import Stars from '../../elements/Stars/Stars';
import { useMutation } from '@apollo/client';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../../query/carts/carts.mutation';
import { asyncAddToCart, asyncDeleteFromCart } from './../../../query/carts/carts.reducers';
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './../../../query/favorites/favorites.mutation';
import { asyncAddToFavorite, asyncDeleteFromFavorite } from './../../../query/favorites/favorites.reducers';

function Card({ info, isLike, isCart }) {
  const rootClasses = [styles.card_wrapper]
  const [add_to_favorite] = useMutation(ADD_TO_FAVORITES)
  const [delete_from_favorite] = useMutation(DELETE_FROM_FAVORITES)
  const [add_to_cart] = useMutation(ADD_TO_CART)
  const [delete_from_cart] = useMutation(DELETE_FROM_CART)
  const [like, setLike] = React.useState(isLike)
  const [cart, setCart] = React.useState(isCart)

  return (
    <div className={rootClasses.join(' ')} onClick={(e) => Router.push(`${PRODUCTS}/${info._id}`)}>
      <div>
        <div className={styles.top}>
          <div className={styles.image}>
            <img src={info.img?.[0] && `${process.env.NEXT_PUBLIC_API_URL}${info.img?.[0]}` || SVG.logo} alt='icon' />
          </div>
        </div>
        <p>{info.name}</p>
      </div>
      
      <div className={styles.card_info}>
          <div className={styles.info}>
            <Stars rating={info.rating} />
            <h1>{info.price || 0} ₽</h1>
            <span>В наличии: {info.quantity || 0} шт.</span>
          </div>

          <div className={styles.button}>
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
            <Like 
              onClick={(e) => {
                e.stopPropagation();
                setCart(old => !old)

                cart ? 
                  asyncDeleteFromCart(delete_from_cart, {productId: info._id})
                  :
                  asyncAddToCart(add_to_cart, {productId: info._id})
              }} 
              active={cart} 
              cart
            />
          </div>
      </div>
    </div>
  )
}

export default Card