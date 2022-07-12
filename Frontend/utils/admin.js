
import { useState } from 'react';

import { GET_CATEGORIES } from './../query/categories/categories.query';
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './../query/categories/categories.mutation';
import { asyncCreateCategory, asyncUpdateCategory } from './../query/categories/categories.reducers';

import { GET_PRODUCTS, GET_PRODUCTS_IN_CATEGORIES } from '../query/products/products.query';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../query/products/products.mutation';
import { asyncCreateProduct, asyncUpdateProduct } from './../query/products/products.reducers';

import { GET_ALL_USERS, GET_USER } from './../query/users/users.query';

import { GET_FAVORITES, GET_FAVORITES_FOR_USER } from './../query/favorites/favorites.query';

import { GET_CARTS } from './../query/carts/carts.query';

import { GET_FEEDBACKS } from './../query/feedbacks/feedbacks.query';
import { CREATE_FEEDBACK, DELETE_FEEDBACK, UPDATE_FEEDBACK } from './../query/feedbacks/feedbacks.mutation';
import { asyncUpdateFeedback, asyncCreateFeedback } from '../query/feedbacks/feedbacks.reducers';

import { GET_INFO } from './../query/product-info/product-info.query';
import { DELETE_INFO, CREATE_INFO, UPDATE_INFO } from './../query/product-info/product-info.mutation';
import { asyncCreateProductInfo, asyncUpdateProductInfo } from './../query/product-info/product-info.reducers';
import { DELETE_USER } from '../query/users/users.mutation';
import { GET_ORDERS } from './../query/order/order.query';

export const getVariables = (id, value) => {
  switch (id) {
    // case '1': return {id: value.entityId}
  
    default: return {id: value.entityId}
  }
}

export const getEntityValue = (id, value, other) => {
   const main = {
      '1': {...value.getCategory?.[0]},
      '2': {...value.getProduct},
      '3': {...value.getInfo?.[0]},
      '4': {...value.getFeedback?.[0]},
      '5': {...value.getUser},
      '6': {...value.getCart?.[0]},
      '7': {...value.getFavorite?.[0]},
      '8': {...value.getOrder?.[0]},
    }

    const otherValue = {
      '2': {...value.getProduct},
    }

      return other ? otherValue[id] : main[id] 

}

export const getAdminQuery = (id, otherQuery) => {
    const query = {
      '1': GET_CATEGORIES,
      '2': GET_PRODUCTS_IN_CATEGORIES,
      '3': GET_INFO,
      '4': GET_FEEDBACKS,
      '5': GET_ALL_USERS,
      '6': GET_CARTS,
      '7': GET_FAVORITES,
      '8': GET_ORDERS,
    }

    const other = {
      '2': GET_PRODUCTS,
      '5': GET_USER,
      // '7': GET_FAVORITES_FOR_USER,
    }

    return otherQuery ? other[id] : query[id]
}

export const getAdminMutationDelete = (id) => {
  return{
    '1': DELETE_CATEGORY,
    '2': DELETE_PRODUCT,
    '3': DELETE_INFO,
    '4': DELETE_FEEDBACK,
    '5': DELETE_USER,
    '6': DELETE_CATEGORY,//ЗАГЛУШКА Корзина
    '7': DELETE_CATEGORY,//ЗАГЛУШКА Избранное
    '8': DELETE_CATEGORY,//ЗАГЛУШКА Заказы
  }[id]
}

export const getAdminMutationCreate = (id) => {
  return{
    '1': CREATE_CATEGORY,
    '2': CREATE_PRODUCT,
    '3': CREATE_INFO,
    '4': CREATE_FEEDBACK,
    '5': CREATE_CATEGORY,//ЗАГЛУШКА
    '6': CREATE_CATEGORY,//ЗАГЛУШКА Корзина 
    '7': CREATE_CATEGORY,//ЗАГЛУШКА Избранное
    '8': CREATE_CATEGORY,//ЗАГЛУШКА Заказы
  }[id]
}

export const getAdminMutationUpdate = (id) => {
  return{
    '1': UPDATE_CATEGORY,
    '2': UPDATE_PRODUCT,
    '3': UPDATE_INFO,
    '4': UPDATE_FEEDBACK,
    '5': UPDATE_PRODUCT,//ЗАГЛУШКА
    '6': UPDATE_PRODUCT,//ЗАГЛУШКА  Корзина
    '7': UPDATE_PRODUCT,//ЗАГЛУШКА  Избранное
    '8': UPDATE_PRODUCT,//ЗАГЛУШКА  Заказы
  }[id]
}

export const createEntityCategory = (currentMutationEntity, value, file, changeValue, currentEntity, callback) => {
    switch (currentEntity) {
        case '1':
            convertValueToNull(value, changeValue)
            asyncCreateCategory(
              currentMutationEntity, 
              value, 
              () => {
                alert('Категория успешно создана'); 
                callback()
              }, 
              () => alert('Не удалось создать Категорию')
            )
            break;

        case '2':
            convertValueToNull(value, changeValue)
            asyncCreateProduct(
              currentMutationEntity, 
              value,
              file, 
              () => {
                alert('Товар успешно создан'); 
                callback()
              }, 
              () => alert('Не удалось создать Товар')
            )
            break;

        case '3':
            convertValueToNull(value, changeValue)
            asyncCreateProductInfo(
              currentMutationEntity, 
              value, 
              () => {
                alert('Характеристика успешно создана'); 
                callback()
              }, 
              () => alert('Не удалось создать Характеристику')
            )
            break;

        case '4':
            convertValueToNull(value, changeValue)
            asyncCreateFeedback(
              currentMutationEntity, 
              value, 
              () => {
                alert('Отзыв успешно создан'); 
                callback()
              }, 
              () => alert('Не удалось создать Отзыв')
            )
            break;
    
        default:
            break;
    }
}

export const updateEntityCategory = (currentMutationEntity, value, currentEntity, callback) => {
    switch (currentEntity) {
        case '1':
            asyncUpdateCategory(
              currentMutationEntity, 
              value, 
              () => {
                alert('Категория успешно обновлена'); 
                callback()
              }, 
              () => alert('Не удалось обновить Категорию')
            )
            break;

        case '2':
            asyncUpdateProduct(
              currentMutationEntity, 
              value, 
              () => {
                alert('Товар успешно обновлен'); 
                callback()
              }, 
              () => alert('Не удалось обновить Товар')
            )
            break;

        case '3':
            asyncUpdateProductInfo(
              currentMutationEntity, 
              value, 
              () => {
                alert('Характеристика успешно обновлена'); 
                callback()
              }, 
              () => alert('Не удалось обновить Характеристику')
            )
            break;

        case '4':
            asyncUpdateFeedback(
              currentMutationEntity, 
              value, 
              () => {
                alert('Отзыв успешно обновлен'); 
                callback()
              }, 
              () => alert('Не удалось обновить Отзыв')
            )
            break;
    
        default:
            break;
    }
}

export const convertValueToNull = (value, changeValue) => {
  return Object.keys(value)?.map(elem => value[elem] == 'null' && changeValue({[elem]: null}))
}