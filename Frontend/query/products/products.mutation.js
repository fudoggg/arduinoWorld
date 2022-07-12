import { gql } from '@apollo/client';

export const DELETE_PRODUCT = gql`
  mutation deleteProduct ($id: ID!){
    deleteProduct(id:$id){
        _id
        name
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation addProduct ($name: String!, $price: Float!, $quantity: Int!, $category: ID!, $description: String, $img: [String]) {
    addProduct(name: $name, price: $price, quantity: $quantity, category: $category, description: $description, img: $img){
      _id
      name
      price
      quantity
      rating
      category
      description
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct ($id: ID!, $name: String!, $price: Float!, $quantity: Int!, $category: ID!, $description: String) {
    changeProduct(id: $id, name: $name, price: $price, quantity: $quantity, category: $category, description: $description){
      _id
      name
      price
      quantity
      rating
      category
      description
    }
  }
`;