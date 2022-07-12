import styles from '../../styles/pages/admin/Index.module.scss'

import MainContainer from "../../components/constructor/MainContainer/MainContainer";
import Grid from '../../components/containers/Grid/Grid';
import NavBar from '../../components/constructor/NavBar/NavBar';
import React from 'react';
import Router, { useRouter } from 'next/router';

import Input from '../../components/elements/Input/Input';
import Button from '../../components/elements/Button/Button';
import Textarea from '../../components/elements/Textarea/Textarea';
import { ADMIN, ENTITY } from './../../utils/paths';
import { ADMIN_MENU_LIST } from '../../utils/const';
import AdminHeader from './../../components/constructor/Admin/AdminHeader/AdminHeader';
import AdminMainContainer from '../../components/constructor/Admin/AdminMainContainer/AdminMainContainer';
import Table from '../../components/elements/Table/Table';
import Row from '../../components/elements/Row/Row';
import Flex from './../../components/containers/Flex/Flex';
import { GET_CATEGORIES } from '../../query/categories/categories.query';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_CATEGORY } from './../../query/categories/categories.mutation';
import { getAdminQuery } from './../../utils/admin';
import moment from 'moment'

export default function Index() {
  const mainGridTemplateColumns = '0.1fr 1fr 1fr 1fr 1fr'

  const {query} = useRouter()
  const [current, setCurrent] = React.useState(query.id || '1')
  const [entity, setEntity] = React.useState({})

  const {data, loading} = useQuery(getAdminQuery(current), {
    fetchPolicy: 'network-only',
    onCompleted: data => setEntity(data)
  })

  
  React.useEffect(() => {
    setCurrent(query.id || '1')
  }, [query])

  React.useEffect(() => {
    console.log('admin current', current);
  }, [current])

  
  return (
    <AdminMainContainer>
        <div className={styles.admin_wrapper}>
            <Grid gridTemplateColumns='0.3fr 1fr'>
                <div>
                  <h1>Таблицы</h1>
                  <NavBar list={ADMIN_MENU_LIST} current={current} path={ADMIN}/>
                </div>

                <div>
                  <Flex style={{marginBottom: '32px'}} gap={50}>
                    <h1 style={{margin: '0'}}>Поля</h1>
                    <Button 
                      title='Добавить' 
                      theme='main'
                      onClick={() => Router.push(`${ENTITY}/${current}`)}
                    />
                  </Flex>
                    {
                      current == '1' && //Категории
                        <Table 
                          arrTitle={[
                            '', 
                            'id', 
                            'Название категории', 
                            'ID родительского каталога',
                            'Родитель?',
                          ]} 
                          gridTemplateColumns={mainGridTemplateColumns}
                          gap={15}
                        >
                          {
                            entity.getCategory?.map((item, ind) => (
                              <Row 
                                key={item.id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                              >
                                {/* <input 
                                  type='checkbox' 
                                  onClick={e => {
                                    e.stopPropagation();
                                    e.target.checked 
                                    ? 
                                    arrDelId.push(item.id) 
                                    :
                                    arrDelId = arrDelId.filter(elem => elem != item.id)
                                    console.log('arrDelId', arrDelId);
                                  }}
                                /> */}
                                <div />
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.parentId}</div>
                                <div>{String(item.isParent)}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '2' && //Товары
                        <Table 
                          arrTitle={[
                            '', 
                            'id', 
                            'Название товара', 
                            'Цена', 
                            'Количество', 
                          ]} 
                          gridTemplateColumns={mainGridTemplateColumns}
                        >
                          {
                            entity.getProductInCategories?.map((item, ind) => (
                              <Row 
                                key={item._id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item._id}`)}}
                              >
                                {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                                <div />
                                <div>{item._id}</div>
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                                <div>{item.quantity}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '3' && //Характеристики
                        <Table 
                          arrTitle={[
                            '',
                            'id', 
                            'ID продукта', 
                            'Название характеристики', 
                            'Значение', 
                          ]} 
                          gridTemplateColumns='0.2fr 1fr 1fr 1fr 1fr'
                        >
                          {
                            entity.getInfo?.map((item, ind) => (
                              <Row 
                                key={item.id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                              >
                                {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                                <div />
                                <div>{item.id}</div>
                                <div>{item.productId}</div>
                                <div>{item.title}</div>
                                <div>{item.value}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '4' && //Отзывы
                        <Table 
                          arrTitle={[
                            '', 
                            'id', 
                            'Дата создания', 
                            'ID пользователя', 
                            'Оценка', 
                          ]} 
                          gridTemplateColumns={mainGridTemplateColumns}
                        >
                          {
                            entity.getFeedback?.map((item, ind) => (
                              <Row 
                                key={item.id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                              >
                                {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                                <div />
                                <div>{item.id}</div>
                                <div>{moment(Number(item.createdAt)).format('DD.MM.YYYY HH:MM')}</div>
                                <div>{item.userId}</div>
                                <div>{item.rate}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '5' && //Пользователи
                        <Table 
                        arrTitle={[
                          '', 
                          'id', 
                          'E-mail', 
                          'Имя пользователя', 
                          'Статус', 
                        ]} 
                        gridTemplateColumns={mainGridTemplateColumns}
                      >
                        {
                          entity.allUser?.map((item, ind) => (
                            <Row 
                              key={item.id}
                              gridTemplateColumns={mainGridTemplateColumns} 
                              onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                            >
                              {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                              <div />
                              <div>{item.id}</div>
                              <div>{item.email}</div>
                              <div>{item.name}</div>
                              <div>{item.status}</div>
                            </Row>
                          ))
                        }
                      </Table>
                    }
                    {
                      current == '6' && //Корзина
                        <Table 
                          arrTitle={[
                            '',
                            'id', 
                            'ID пользователя', 
                            'Количество товаров', 
                            '', 
                          ]} 
                          gridTemplateColumns='0.2fr 1fr 1fr 1fr 1fr'
                        >
                          {
                            entity.getCart?.map((item, ind) => (
                              <Row 
                                key={item.id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                              >
                                {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                                <div />
                                <div>{item.id}</div>
                                <div>{item.userId}</div>
                                <div>{item.items.length}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '7' && //Избранное
                        <Table 
                          arrTitle={[
                            '',
                            'id', 
                            'ID пользователя', 
                            'Количество товаров', 
                            '', 
                          ]} 
                          gridTemplateColumns='0.2fr 1fr 1fr 1fr 1fr'
                        >
                          {
                            entity.getFavorite?.map((item, ind) => (
                              <Row 
                                key={item.id}
                                gridTemplateColumns={mainGridTemplateColumns} 
                                onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                              >
                                {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                                <div />
                                <div>{item.id}</div>
                                <div>{item.userId}</div>
                                <div>{item.productsIds.length}</div>
                              </Row>
                            ))
                          }
                        </Table>
                    }
                    {
                      current == '8' && //Заказы
                      <Table 
                        arrTitle={[
                          '',
                          'id', 
                          'Дата заказа', 
                          'ID пользователя', 
                          'Сумма заказа', 
                        ]} 
                        gridTemplateColumns='0.2fr 1fr 1fr 1fr 1fr'
                      >
                        {
                          entity.getOrder?.map((item, ind) => (
                            <Row 
                              key={`all-ordes-${item.id}`}
                              gridTemplateColumns={mainGridTemplateColumns} 
                              onClick={() => {Router.push(`${ENTITY}/${current}?entityId=${item.id}`)}}
                            >
                              {/* <input type='checkbox' onClick={e => e.stopPropagation()}/> */}
                              <div />
                              <div>{item.id}</div>
                              <div>{moment(Number(item.createdAt)).format('DD.MM.YYYY - HH:MM')}</div>
                              <div>{item.user.userId}</div>
                              <div>{item.sum} ₽</div>
                            </Row>
                          ))
                        }
                      </Table>
                    }
                </div>
            </Grid>
        </div>
    </AdminMainContainer>
  )
}
