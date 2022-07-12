import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories ($id: ID){
    getCategory(id: $id){
      id
      name
      parentId
      isParent
    }
  }
`;

export const GET_CATEGORIES_BY_PARENT = gql`
  query getCategoryByParent ($id: ID!){
    getCategoryByParent (id: $id){
      id
      name
      parentId
      isParent
    }
  }
`;