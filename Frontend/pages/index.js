import styles from '../styles/pages/index.module.scss'

import MainContainer from "../components/constructor/MainContainer/MainContainer";
import Flex from './../components/containers/Flex/Flex';
import Card from './../components/constructor/Card/Card';
import Grid from './../components/containers/Grid/Grid';
import NavBar from './../components/constructor/NavBar/NavBar';
import React from 'react';


import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_IN_CATEGORIES } from './../query/products/products.query';
import { CATEGORIES } from './../utils/paths';
import { GET_CATEGORIES } from './../query/categories/categories.query';
import Cookies from 'js-cookie';

export default function Home() {
  const [categories, setCategories] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [cart, setCart] = React.useState({})
  const [favorites, setFavorites] = React.useState({})

  const {data, loading} = useQuery(GET_PRODUCTS_IN_CATEGORIES, {
    fetchPolicy: 'network-only',
    variables: {
      userId: Cookies.get('userId'),
      login: !!Cookies.get('userId')
    },
    onCompleted: data => {
      console.log('index getProducts', data); 
      setCart(data.getCartByUserID)
      setFavorites(data.getFavoriteByUserID?.[0])
      setProducts(data.getProductInCategories)
    },
    onError: data => console.log(data)
  })

  const {data: dataCaterories, loading: Caterories} = useQuery(GET_CATEGORIES, {
    fetchPolicy: 'network-only',
    onCompleted: data => {console.log(data); setCategories(data.getCategory.filter(elem => elem.isParent))}
  })

  return (
    <MainContainer isNavbar>
          <div>
            <h1>Каталог</h1>
            <NavBar list={categories} path={CATEGORIES}/>
          </div>

          <div>
                {/* <h1>Популярное</h1> */}
                <Flex gap={16} theme='main'>
                  {
                    products.map((card, ind) => 
                      <Card 
                        key={card._id} 
                        info={card} 
                        isCart={cart?.items?.some(item => item.productId?._id == card._id)} 
                        isLike={favorites?.productsIds?.some(item => item?._id == card._id)}
                      />
                    )
                  }
                </Flex>
          </div>
    </MainContainer>
  )
}
