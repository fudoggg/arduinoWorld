import { gql } from '@apollo/client';

export const ADD_TO_FAVORITES = gql`
  mutation addToFavorite ($userId: ID!, $productId: ID!) {
    addToFavorite(userId: $userId, productId: $productId) {
      id
      userId
      productsIds
    }
  }
`;

export const DELETE_FROM_FAVORITES = gql`
  mutation deleteFromFavorite ($userId: ID!, $productId: ID!) {
    deleteFromFavorite(userId: $userId, productId: $productId){
      id
      userId
      productsIds
    }
  }
`;

// export const DELETE_PRODUCT = gql`
//   mutation deleteProduct ($id: ID!){
//     deleteProduct(id:$id){
//         id
//         name
//     }
//   }
// `;

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