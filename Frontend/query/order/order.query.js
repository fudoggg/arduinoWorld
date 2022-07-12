import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
    query getOrder ($id: ID){
        getOrder (id: $id){
          id
          createdAt
          status
          sum
          isDeliver
          items{
            count
            productId
          }
          user{
            userId
            phone
            email
            fullName
            addres
          }
        }
    }
`;

export const GET_ORDER_BY_USER = gql`
  query getCartByUserID ($userId: ID!){
    getOrderByUserId(userId: $userId) {
        id
        createdAt
        status
        isDeliver
        sum
        items {
          count
          productId
        }
        user {
          userId
          phone
          email
          fullName
          addres
        }
    }
  }
`;