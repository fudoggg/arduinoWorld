import { gql } from '@apollo/client';

export const GET_FAVORITES = gql`
  query getFavorite ($id: ID){
    getFavorite(id: $id){
      id
      userId
      productsIds
    }
  }
`;

export const GET_FAVORITES_BY_USER = gql`
  query getFavoriteByUserID($userId: ID!) {
    getFavoriteByUserID(userId: $userId) {
      _id
      userId
      productsIds {
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
    getCartByUserID(userId: $userId) {
      _id
      userId
      items {
        count
        productId {
          _id
        }
      }
    }
  }
`;