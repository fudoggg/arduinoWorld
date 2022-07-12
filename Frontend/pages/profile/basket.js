import React from 'react'
import MainContainer from '../../components/constructor/MainContainer/MainContainer'
import OrderBasket from '../../components/constructor/OrderBasket/OrderBasket'
import Grid from '../../components/containers/Grid/Grid'
import Flex from './../../components/containers/Flex/Flex';
import LongCard from './../../components/constructor/LongCard/LongCard';

import { useQuery } from '@apollo/client';
import { GET_CART_BY_USER } from '../../query/carts/carts.query';
import Cookies from 'js-cookie';

function Basket() {

  const [cart, setCart] = React.useState({})
  const [favorites, setFavorites] = React.useState({})

  const {data: dataCart, loading: loadingCart, refetch} = useQuery(GET_CART_BY_USER, {
    skip: !(!!Cookies.get('userId')),
    fetchPolicy: 'network-only',
    variables:{
      userId: Cookies.get('userId')
    },
    onCompleted: data => {
      console.log(data); 
      setFavorites(data.getFavoriteByUserID?.[0])
      setCart(data.getCartByUserID)
    }
  })

  return (
    <MainContainer>
      <Grid gridTemplateColumns='0.3fr 1fr'>
        <div>
          <h1>Корзина</h1>
          <OrderBasket 
            count={cart?.sumOf} 
            sum={cart?.totalPrice}
            refetch={refetch}
          />
        </div>
        <div>
          <Flex gap={16} style={{marginTop: '80px'}}>
            {
                cart?.items?.map((card, ind) => 
                  <LongCard 
                    key={`basket-LongCard-${card?.productId?._id}`} 
                    info={{...card?.productId, count: card?.count}}
                    isCart
                    isLike={favorites?.productsIds?.some(item => item._id == card?.productId?._id)}

                  />
                )
            }
          </Flex>
        </div>
      </Grid>
      
    </MainContainer>
  )
}

export default Basket