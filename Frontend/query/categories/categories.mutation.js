import { gql } from '@apollo/client';

export const DELETE_CATEGORY = gql`
  mutation deleteCategory ($id: ID!){
    deleteCategory(id: $id){
        id
        name
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation addCategory ($name: String!, $parentId: ID, $isParent: Boolean!){
    addCategory(name: $name, parentId: $parentId, isParent: $isParent){
      id
      name
      parentId
      isParent
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation addCategory ($id: ID!, $name: String, $parentId: ID, $isParent: Boolean){
    changeCategory(id: $id, name: $name, parentId: $parentId, isParent: $isParent){
      id
      name
      parentId
      isParent
    }
  }
`;