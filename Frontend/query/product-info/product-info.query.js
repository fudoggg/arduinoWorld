import { gql } from '@apollo/client';

export const GET_INFO = gql`
  query getInfo ($id: ID){
    getInfo(id: $id){
      id
      productId
      title
      value
    }
  }
`;

export const GET_PRODUCT_INFO = gql`
  query getProductInfo ($productId: ID!){
    getProductInfo(productId: $productId){
      id
      productId
      title
      value
    }
  }
`;