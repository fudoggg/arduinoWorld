import styles from './ProductCard.module.scss'

import React from 'react'
import { SVG } from './../../../utils/const';
import Flex from '../../containers/Flex/Flex';
import Like from '../../elements/Like/Like';
import Button from '../../elements/Button/Button';
import Сounter from '../../elements/Сounter/Сounter';
import Grid from './../../containers/Grid/Grid';
import Stars from '../../elements/Stars/Stars';
import Cookies from 'js-cookie';
import FeedbackForm from './../FeedbackForm/FeedbackForm';
import { useMutation } from '@apollo/client';
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from './../../../query/favorites/favorites.mutation';
import { ADD_TO_CART, DELETE_FROM_CART } from '../../../query/carts/carts.mutation';
import { asyncDeleteFromFavorite, asyncAddToFavorite } from '../../../query/favorites/favorites.reducers';
import { asyncDeleteFromCart, asyncAddToCart } from '../../../query/carts/carts.reducers';

function ProductCard({info, isLike, isCart, countInCart}) {
  const [activePhoto, setActivePhoto] = React.useState(0)
  const [activeFeedback, setActiveFeedback] = React.useState(false)

  const [add_to_favorite] = useMutation(ADD_TO_FAVORITES)
  const [delete_from_favorite] = useMutation(DELETE_FROM_FAVORITES)
  const [add_to_cart] = useMutation(ADD_TO_CART)
  const [delete_from_cart] = useMutation(DELETE_FROM_CART)

  const [like, setLike] = React.useState(isLike)
  const [cart, setCart] = React.useState(isCart)
  const [countForCart, setCountForCart] = React.useState(countInCart || 1)

  //заглушка до техо пор пока данные не будут приходить одним запросом
  React.useEffect(() => {
    setCart(isCart)
    setLike(isLike)
  }, [isLike, isCart, countInCart])
  
  React.useEffect(() => {
    console.log('countInCart', countInCart);
    setCountForCart(countInCart || 1)
  }, [ countInCart])

  React.useEffect(() => {
    console.log('countForCart', countForCart);
  }, [ countForCart])

  const arr = [
    SVG.cart,
    SVG.heart,
    SVG.logo,
    SVG.person,
    SVG.truck,
    SVG.logo,
  ]

  return (
    <div className={styles.product_card_wrapper}>
      {activeFeedback && <FeedbackForm productId={info._id} active={activeFeedback} setActive={setActiveFeedback} />}
      <div className={styles.switch_img}>
        {/* {
          arr?.map((src,ind) => (
            <img key={ind} src={arr[ind]} alt='image' onMouseEnter={() => setActivePhoto(ind)}/>
          ))
        } */}
        {
          info?.img?.map((src,ind) => (
            <img key={ind} src={process.env.NEXT_PUBLIC_API_URL + src} alt='image' onMouseEnter={() => setActivePhoto(ind)}/>
          ))
        }
      </div>

      {/* <div className={styles.main_img} style={{background: arr.length > 0 ? 'none' : `center/contain url(${SVG.logo}) no-repeat`}}> */}
      <div className={styles.main_img} style={{background: info?.img?.length > 0 ? 'none' : `center/contain url(${SVG.logo}) no-repeat`}}>
        {info?.img && info?.img.length > 0 && <img src={process.env.NEXT_PUBLIC_API_URL + info.img[activePhoto] } alt='image' />}
         {/* <img src={process.env.NEXT_PUBLIC_API_URL + info?.img?.[activePhoto] } alt='image' /> */}
      </div>

      <div className={styles.info}>
        <div className={styles.grow}>
          <div className={styles.top}>
            <p>{info.description}</p>
            {/* <span>Перейти к полному описанию</span> */}
          </div>
          <div className={styles.bottom}>
            <Stars key={0} rating={info.rating} />
            <h1>{info.price} ₽</h1>
            <p>В наличии: {info.quantity} шт.</p>
            <Flex>
              <Like
                onClick={(e) => {
                  setLike(old => !old)

                  like ? 
                    asyncDeleteFromFavorite(delete_from_favorite, {productId: info._id})
                    :
                    asyncAddToFavorite(add_to_favorite, {productId: info._id})
                }} 
                active={like} 
              />
              <Button 
                onClick={e => {
                  setCart(old => !old)

                  cart ? 
                    asyncDeleteFromCart(delete_from_cart, {productId: info._id})
                    :
                    asyncAddToCart(add_to_cart, {productId: info._id, count: countForCart})
                }}
                title={cart ? 'В корзине' : 'Купить'}
                theme={cart ? 'active' : ''}
              />
              <Сounter value={countForCart} changeValue={setCountForCart} max={info.quantity}/>
              {<span onClick={() => setActiveFeedback(true)}>Оставить отзыв</span>}
            </Flex>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard