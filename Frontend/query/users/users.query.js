import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
  query allUser{
    allUser{
      id
      email
      phone
      password
      name
      status
      addres
      role
      feedback
      favorite
      cart
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      status
      email
      password
      name
      phone
      addres
      role
      feedback
      favorite
      cart
    }
  }
`;