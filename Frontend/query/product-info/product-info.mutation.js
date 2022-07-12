import { gql } from '@apollo/client';

export const DELETE_INFO = gql`
  mutation deleteProductInfo ($id: ID!){
    deleteProductInfo(id: $id){
      id
      productId
      title
      value
    }
  }
`;

export const CREATE_INFO = gql`
  mutation addProductInfo ($productId: ID!, $title: String!, $value: String!) {
    addProductInfo(productId: $productId, title: $title, value: $value) {
      id
      productId
      title
      value
    }
  }
`;

export const UPDATE_INFO = gql`
  mutation changeProductInfo($id: ID!, $productId: ID!, $title: String!, $value: String!) {
    changeProductInfo(id: $id, productId: $productId, title: $title, value: $value){
      id
      productId
      title
      value
    }
  }
`;