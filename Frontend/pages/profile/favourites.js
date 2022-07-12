import React from 'react'
import { useRouter } from 'next/router';
import MainContainer from '../../components/constructor/MainContainer/MainContainer';
import Flex from './../../components/containers/Flex/Flex';
import LongCard from './../../components/constructor/LongCard/LongCard';

import { useQuery } from '@apollo/client';
import { GET_FAVORITES_BY_USER } from '../../query/favorites/favorites.query';
import Cookies from 'js-cookie';

function Favourites() {
  const {back} = useRouter()

  const [cart, setCart] = React.useState({})
  const [favorites, setFavorites] = React.useState({})
  
  const {data: dataFavorites, loading: loadingFavorites} = useQuery(GET_FAVORITES_BY_USER, {
    skip: !(!!Cookies.get('userId')),
    fetchPolicy: 'network-only',
    variables:{
      userId: Cookies.get('userId')
    },
    onCompleted: data => {
      console.log(data); 
      setCart(data.getCartByUserID?.[0])
      setFavorites(data.getFavoriteByUserID?.[0])
    }
  })

  return (
    <div>
        <MainContainer>
          <h1>Избранное</h1>
          <Flex gap={16}>
            {
                favorites?.productsIds?.map((card, ind) => 
                  <LongCard 
                    key={`favorites-LongCard-${card._id}`} 
                    info={card}
                    isCart={cart?.items?.productId?.some(item => item._id == card._id)}
                    isLike
                  />
                )
            }
          </Flex>
        </MainContainer>
    </div>
  )
}

export default Favourites