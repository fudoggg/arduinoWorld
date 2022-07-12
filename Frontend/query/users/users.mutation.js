import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation register_user($email: String!, $password: String!, $name: String!){
    register(email: $email, password: $password, name: $name){
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login_user($email: String!, $password: String){
    login(email: $email, password: $password){
      token
      userName
      userId
      role
    }
  }
`;

export const UPDATE_USER = gql`
  mutation changeUser ($id: ID!, $email: String!, $phone: String, $name: String, $status: String, $addres: String){
    changeUser (id: $id, email: $email, phone: $phone, name: $name, status: $status, addres: $addres) {
      id
      email
      phone
      name
      status
      addres
      createdAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser ($id: ID!){
    deleteUser (id: $id) {
      id
      email
    }
  }
`;