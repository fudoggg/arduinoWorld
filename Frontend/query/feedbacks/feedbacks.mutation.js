import { gql } from '@apollo/client';

export const DELETE_FEEDBACK = gql`
  mutation deleteFeedback ($id: ID!){
    deleteFeedback(id: $id){
      id
      userId
      productId
      rate
    }
  }
`;

export const CREATE_FEEDBACK = gql`
  mutation addFeedback ($productId: ID!, $userId: ID!, $rate: Int!, $comment: String) {
    addFeedback(userId: $userId, productId: $productId, comment: $comment, rate: $rate){
      id
      rate
      comment
      productId
      userId
    }
  }
`;

export const UPDATE_FEEDBACK = gql`
  mutation changeFeedback ($id: ID!, $productId: ID!, $userId: ID!, $rate: Int!, $comment: String) {
    changeFeedback(id: $id, productId: $productId, userId: $userId, rate: $rate, comment: $comment){
      id
      createdAt
      rate
      comment
      productId
      userId
    }
  }
`;