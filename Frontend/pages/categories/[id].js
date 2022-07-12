import React from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


import MainContainer from '../../components/constructor/MainContainer/MainContainer';
import Grid from '../../components/containers/Grid/Grid';
import Flex from './../../components/containers/Flex/Flex';

import { CATEGORIES } from './../../utils/paths';
import NavBar from './../../components/constructor/NavBar/NavBar';
import LongCard from './../../components/constructor/LongCard/LongCard';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_IN_CATEGORIES, GET_CART_AND_FAVORITE } from './../../query/products/products.query';
import { GET_CATEGORIES, GET_CATEGORIES_BY_PARENT } from './../../query/categories/categories.query';


function Index() {
    const {query, asPath, back} = useRouter()

    const [categories, setCategories] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [cart, setCart] = React.useState({})
    const [favorites, setFavorites] = React.useState({})
    
    const {data: dataCaterories, loading: Caterories} = useQuery(GET_CATEGORIES_BY_PARENT, {
      fetchPolicy: 'network-only',
      variables:{
        id: query.id
      },
      onCompleted: data =>{ console.log('dataCaterories', data);  setCategories(data.getCategoryByParent) }
    })

    const {data, loading} = useQuery(GET_PRODUCTS_IN_CATEGORIES, {
      fetchPolicy: 'network-only',
      variables: {
        id: query.id,
        userId: Cookies.get('userId'),
        login: !!Cookies.get('userId'),
      },
      onCompleted: data => { 
        console.log('data', data); 
        setCart(data.getCartByUserID)
        setFavorites(data.getFavoriteByUserID?.[0])
        setProducts(data.getProductInCategories)
      }
    })

  return (
      <MainContainer isNavbar>
            <div>
                <h1>Каталог</h1>
                <NavBar list={categories} current={query.id} path={CATEGORIES}/>
            </div>

            <div>
                <Flex gap={16} theme='main'>
                    {
                        products?.map((card, ind) => 
                          <LongCard 
                            key={card._id} 
                            info={card} 
                            isCart={cart?.items?.some(item => item?.productId?._id == card._id)} 
                            isLike={favorites?.productsIds?.some(item => item._id == card._id)}
                          />
                        )
                    }
                </Flex>
            </div>
      </MainContainer>
  )
}

export default Index