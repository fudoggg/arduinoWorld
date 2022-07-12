import { gql } from '@apollo/client';

// {
//   "user": {
//     "userId": "624053efa7890c81c29c979e",
//     "phone": "7912",
//     "email": "",
//     "fullName": "",
//     "addres": ""
//   },
//   "items": {
//     "count": 6,
//     "productId": "62404e0de351d0bb1e4d7b72"
//   },
//   "sum": 1399,
//   "isDeliver": true
// }

export const CREATE_ORDER = gql`
  mutation createOrder($user: UserInput!, $items: [ItemsInput!], $sum: Float!, $isDeliver: Boolean!) {
    createOrder(user: $user, items: $items, sum: $sum,  isDeliver: $isDeliver) {
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
