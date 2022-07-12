import React from 'react'
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import ProductCard from './../../../components/constructor/ProductCard/ProductCard';
import ProductInfo from './../../../components/constructor/ProductInfo/ProductInfo';
import FeedbackCard from './../../../components/constructor/FeedbackCard/FeedbackCard';

import MainContainer from '../../../components/constructor/MainContainer/MainContainer'
import Grid from './../../../components/containers/Grid/Grid';

import { GET_PRODUCTS } from './../../../query/products/products.query';
import Cookies from 'js-cookie';

function Index() {
    const {query, asPath, back} = useRouter()

    const [users, setUsers] = React.useState([])
    const [feedbacks, setFeedbacks] = React.useState([])
    const [product, setProducts] = React.useState({})
    const [productInfo, setProductsInfo] = React.useState([])
    const [cart, setCart] = React.useState({})
    const [favorites, setFavorites] = React.useState({})

    const {data, loading} = useQuery(GET_PRODUCTS, {
      fetchPolicy: 'network-only',
      variables:{
          id: query.id,
          userId: Cookies.get('userId'),
          login: !!Cookies.get('userId')
      },
      onCompleted: data => {
        console.log(data); 
        setCart(data.getCartByUserID)
        setFavorites(data.getFavoriteByUserID?.[0])
        setProductsInfo(data.getProduct?.productInfo)
        setFeedbacks(data.getProduct?.feedback)
        setProducts(data.getProduct)}
    })

  return (
      <MainContainer>
          <h1>{product.name}</h1>
          <ProductCard 
            info={product} 
            isCart={cart?.items?.some(item => item.productId?._id == product._id)} 
            isLike={favorites?.productsIds?.some(item => item._id == product._id)}
            countInCart={cart?.items?.find(item => item.productId?._id == product._id)?.count}
          />
          <h1 />
          <ProductInfo>
              <div>
                  {product.description}
              </div>
              <div>
                  <Grid length={2} theme='inline'>
                      {
                        productInfo?.map(elem => 
                          <>
                            <div>{elem.title}</div>
                            <div>{elem.value}</div>
                          </>
                        )
                      }
                  </Grid>
              </div>
              <div>
                  <Grid length={1}>
                    {
                        feedbacks?.map((feed) => (
                            <FeedbackCard key={feed.id} info={feed}/>
                        ))
                    }
                  </Grid>
              </div>
          </ProductInfo>
      </MainContainer>
  )
}

export default Index