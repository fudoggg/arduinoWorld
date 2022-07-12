import { gql } from '@apollo/client';

// export const DELETE_PRODUCT = gql`
//   mutation deleteProduct ($id: ID!){
//     deleteProduct(id:$id){
//         id
//         name
//     }
//   }
// `;

export const ADD_TO_CART = gql`
  mutation addToCart ($userId: ID!, $productId: ID!, $count: Int!) {
    addToCart(userId: $userId, productId: $productId, count: $count){
      id
      userId
      items{
        count
        productId
      }
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation deleteFromCart ($userId: ID!, $productId: ID!) {
    deleteFromCart(userId: $userId, productId: $productId){
      id
      userId
      items{
        count
        productId
      }
    }
  }
`;

export const CLEAR_CART_BY_USER_ID = gql`
  mutation clearCartByUserID ($userId: ID!) {
    clearCartByUserID (userId: $userId){
      id
      userId
      items{
        count
        productId
      }
    }
  }
`;

// export const CREATE_PRODUCT = gql`
//   mutation addProduct ($name: String!, $price: Float!, $quantity: Int!, $category: ID!, $description: String) {
//     addProduct(name: $name, price: $price, quantity: $quantity, category: $category, description: $description){
//       id
//       name
//       price
//       quantity
//       rating
//       category
//       description
//       info
//     }
//   }
// `;

// export const UPDATE_PRODUCT = gql`
//   mutation updateProduct ($id: ID!, $name: String!, $price: Float!, $quantity: Int!, $category: ID!, $description: String) {
//     changeProduct(id: $id, name: $name, price: $price, quantity: $quantity, category: $category, description: $description){
//       id
//       name
//       price
//       quantity
//       rating
//       category
//       description
//       info
//     }
//   }
// `;