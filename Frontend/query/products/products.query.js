import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProduct($id: ID!, $userId: ID, $login: Boolean = false) {
    getProduct(id: $id) {
      _id
      name
      price
      quantity
      rating
      category
      img
      description
      img
      productInfo {
        _id
        title
        value
      }
      feedback {
        _id
        rate
        comment
        createdAt
        userId {
          name
        }
      }
    }
    getCartByUserID(userId: $userId) @include(if: $login) {
      _id
      items {
        count
        productId {
          _id
        }
      }
    }
    getFavoriteByUserID(userId: $userId) @include(if: $login) {
      _id
      productsIds {
        _id
      }
    }
  }
`;

export const GET_PRODUCTS_IN_CATEGORIES = gql`
  query getProductInCategories ($id: ID, $userId: ID, $login: Boolean = false){
    getProductInCategories(categoryId: $id){
      _id
      name
      price
      quantity
      description
      img
      category
      rating
    }
    getCartByUserID (userId: $userId) @include(if: $login){
      _id
      items{
        count
        productId{
          _id
        }
      }
    }
    getFavoriteByUserID(userId: $userId) @include(if: $login){ 
      _id
      productsIds{
        _id
      }
    }
  }
`;

export const GET_CART_AND_FAVORITE = gql`
  query getCartAndFavorite($userId: ID!) {
    getFavoriteByUserID(userId: $userId) {
      _id
      userId
      productsIds {
        _id
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