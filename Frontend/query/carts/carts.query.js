import { gql } from '@apollo/client';

export const GET_CARTS = gql`
  query getCart ($id: ID){
    getCart (id: $id){
      id
      userId
      items{
        count
        productId
      }
    }
  }
`;

export const GET_CART_BY_USER = gql`
    query getCartByUserID($userId: ID!, $order: Boolean = false) {
      getCartByUserID(userId: $userId) {
        _id
        userId
        sumOf
        totalPrice
        items {
          count
          productId {
            _id
            name
            price
            quantity
            description
            category
            rating
            img
          }
        }
      }
      getFavoriteByUserID(userId: $userId) @skip(if: $order) {
        _id
        userId
        productsIds {
          _id
        }
      }
    }
`;