import { gql } from '@apollo/client';

export const GET_FEEDBACKS = gql`
  query getFeedback ($id: ID){
    getFeedback (id: $id){
      id
      createdAt
      rate
      comment
      productId
      userId
    }
  }
`;

export const GET_FEEDBACKS_BY_PRODUCT_ID = gql`
  query getFeedbackByProductId ($productId: ID!){
    getFeedbackByProductId (productId:$productId){
      id
      rate
      comment
      productId
      userId
      createdAt
    }
  }
`;