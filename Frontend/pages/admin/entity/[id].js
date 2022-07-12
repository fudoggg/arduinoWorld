import styles from '../../../styles/pages/admin/entity.module.scss'

import Grid from '../../../components/containers/Grid/Grid';
import React from 'react';
import Router, { useRouter } from 'next/router';

import Input from '../../../components/elements/Input/Input';
import Button from '../../../components/elements/Button/Button';
import Textarea from '../../../components/elements/Textarea/Textarea';
import AdminMainContainer from './../../../components/constructor/Admin/AdminMainContainer/AdminMainContainer';
import NavBar from './../../../components/constructor/NavBar/NavBar';
import { ADMIN } from './../../../utils/paths';
import { ADMIN_MENU_LIST } from '../../../utils/const';
import Flex from '../../../components/containers/Flex/Flex';
import { useQuery, useMutation } from '@apollo/client';
import { asyncDeleteItem } from './../../../query/_global/asyncDeleteItem';
import { GET_CATEGORIES } from './../../../query/categories/categories.query';
import Select from '../../../components/elements/Select/Select';
import useObject from './../../../hooks/useObject';
import Table from './../../../components/elements/Table/Table';
import { 
  getEntityValue,
  getAdminQuery, 
  getAdminMutationDelete, 
  getAdminMutationCreate, 
  getAdminMutationUpdate, 
  createEntityCategory, 
  updateEntityCategory, 
  getVariables
} from './../../../utils/admin';
import Row from '../../../components/elements/Row/Row';
import EditingImage from './../../../components/constructor/EditingImage/EditingImage';
import moment from 'moment'

export default function Index() {
  const {query} = useRouter()
  const [current, setCurrent] = React.useState(query.id || '1')
  const [сategories, setCategories] = React.useState([])
  const [file,setFile] = React.useState([])
  const {value, changeValue} = useObject()

  const [state, setState] = React.useState()
  const settingOtherQuery = {
    '2': true,
    '5': true,
  }

  const [delete_entity] = useMutation(getAdminMutationDelete(current))
  const [create_entity] = useMutation(getAdminMutationCreate(current))
  const [update_entity] = useMutation(getAdminMutationUpdate(current))

  const {data, loading} = useQuery(getAdminQuery(current, settingOtherQuery[current]), {
    fetchPolicy: 'network-only',
    skip: !(!!query.entityId),
    variables: {
      id: query.entityId
    },
    // variables: getVariablesEntity(current, {entityId: query.entityId}),
    
    onCompleted: data => {
      console.log('entity query.entityId', query.entityId);
      console.log('entity data', data);
      changeValue(getEntityValue(current, data))
    }
  })

  const {data: categoriesData, loading: categoriesLoading} = useQuery(GET_CATEGORIES, {
    fetchPolicy: 'network-only',
    onCompleted: data => setCategories(data.getCategory)
  })

  React.useEffect(() => {
    setCurrent(query.id || '1')
  }, [query])

  return (
    <AdminMainContainer>
      <div className={styles.entity_wrapper}>
        <Grid gridTemplateColumns='0.3fr 1fr'>
          <div>
            <h1>Таблицы</h1>
            <NavBar list={ADMIN_MENU_LIST} current={current} path={ADMIN}/>
          </div>
        
          <div>
            <Flex style={{marginBottom: '32px'}} gap={50}>
              <h1 style={{margin: '0'}}>Поля</h1>
              {
                query.entityId &&
                <Button 
                  title='Удалить' 
                  theme='danger'
                  onClick={() => {
                    confirm("Вы точно хотите удалить данную запись ?") && 
                      asyncDeleteItem(delete_entity, query.entityId, () => Router.push(`${ADMIN}/${current}`))
                  }}
                />
              }
              
            </Flex>
              {
                current == '1' && //Категории
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID категории'       title='ID категории'       value={value.id}   disabled                                             /> <div/>
                    <Input placeholder='Название категории' title='Название категории' value={value.name} onChange={e => changeValue({name: e.target.value})}  /> <div/>
                    <Select
                      title='Родительский каталог'
                      value={value.parentId}
                      onChange={e => changeValue({parentId: e.target.value})}
                    >
                      <option value={query.entityId || 'null'} defaultChecked>Родительский каталог</option>
                      {
                        сategories.filter(elem => elem.isParent).map(item => 
                          <option key={item.id} value={item.id}>{item.name}</option>
                        )
                      }
                    </Select>
                  </Grid>
              }
              {
                current == '2' && //Товары
                  <>
                    <Grid gridTemplateColumns='1fr 2fr' gap={15} style={{marginBottom: '15px'}}>
                      <Input placeholder='ID товара'       title='ID товара'       value={value._id}        disabled                                                         /> <div/>
                      <Input placeholder='Название товара' title='Название товара' value={value.name}       onChange={e => changeValue({name: e.target.value})}     /> <div/>
                      <Input placeholder='Цена'            title='Цена'            value={value.price}      onChange={e => changeValue({price: e.target.value})}    /> <div/>
                      <Input placeholder='Количество'      title='Количество'      value={value.quantity}   onChange={e => changeValue({quantity: e.target.value})} /> <div/>
                      <Input placeholder='Рейтинг'         title='Рейтинг'         value={value.rating}    disabled                                                 /> <div/>
                      <Select
                        title='Выберите категорию'
                        value={value.parentId || сategories.find(elem => elem.id == value.category)?.parentId}
                        onChange={e => changeValue({parentId: e.target.value})}
                      >
                        <option value={'null'} defaultChecked>Выберите категорию</option>
                        {
                          сategories.filter(elem => elem.isParent)?.map(item => 
                            <option key={item.id} value={item.id}>{item.name}</option>
                          )
                        }
                      </Select> <div/>
                      <Select
                        title='Выберите подкатегорию'
                        value={value.category}
                        onChange={e => changeValue({category: e.target.value})}
                      >
                        <option value={'null'} defaultChecked>Выберите подкатегорию</option>
                        
                        {
                          
                          сategories.filter(elem => (elem.parentId == (value.parentId || сategories.find(item => item.id == value.category)?.parentId)) && !elem.isParent)?.map(item => 
                            <option key={item.id} value={item.id}>{item.name}</option>
                          )
                        }
                      </Select> <div/>
                      <Textarea placeholder='Описание'     value={value.description}    onChange={e => changeValue({description: e.target.value})}     /> <div/>
                      {/* <Input placeholder='Фото'            value={null}                                                                                /> <div/> */}
                    </Grid>
                    <EditingImage 
                      value={value} 
                      changeValue={changeValue}
                      file={file}
                      setFile={setFile}
                    />
                  </>
              }
              {
                current == '3' && //Характеристики
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID характеристики'         title='ID характеристики'        value={value.id}               disabled                                             /> <div/>
                    <Input placeholder='ID товара'                 title='ID товара'                value={value.productId}   onChange={e => changeValue({productId: e.target.value})}  /> <div/>
                    <Input placeholder='Название характеристики'   title='Название характеристики'  value={value.title}       onChange={e => changeValue({title: e.target.value})}      /> <div/>
                    <Input placeholder='Значение'                  title='Значение'                 value={value.value}       onChange={e => changeValue({value: e.target.value})}      /> <div/>
                  </Grid>
              }
              {
                current == '4' && //Отзывы
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID отзыва'         title='ID отзыва'         value={value.id}          disabled                                                 /> <div/>
                    <Input placeholder='Дата создания'     title='Дата создания'     value={value.createdAt}   disabled                                                 /> <div/>
                    <Input placeholder='ID пользователя'   title='ID пользователя'   value={value.userId}      onChange={e => changeValue({userId: e.target.value})}    /> <div/>
                    <Input placeholder='ID товара'         title='ID товара'         value={value.productId}   onChange={e => changeValue({productId: e.target.value})} /> <div/>
                    <Input placeholder='Количество звезд'  title='Количество звезд'  value={value.rate}        onChange={e => changeValue({rate: e.target.value})}      /> <div/>
                    <Textarea placeholder='Отзыв'          title='Отзыв' value={value.comment}     onChange={e => changeValue({comment: e.target.value})}   /> <div/>
                    {/* <Input placeholder='Отзыв'             value={value.} /> <div/> */}
                  </Grid>
              }
              {
                current == '5' && //Пользователи
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID пользователя'   title='ID пользователя'   value={value.id}          disabled  /> <div/>
                    <Input placeholder='Дата создания'     title='Дата создания'     value={value.createdAt}   disabled  /> <div/>
                    <Input placeholder='Статус'            title='Статус'            value={value.status}                /> <div/>
                    <Input placeholder='Роль'              title='Роль'              value={value.role}        disabled  /> <div/>
                    <Input placeholder='Имя пользователя'  title='Имя пользователя'  value={value.name}        disabled  /> <div/>
                    <Input placeholder='E-mail'            title='E-mail'            value={value.email}       disabled  /> <div/>
                    <Input placeholder='Пароль'            title='Пароль'            value={value.password}    disabled  /> <div/>
                    <Input placeholder='Телефон'           title='Телефон'           value={value.phone}       disabled  /> <div/>
                    <Input placeholder='Адрес'            title='Адрес'            value={value.addres}      disabled  /> <div/>
                    <Input placeholder='Отзывы'            title='Отзывы'            value={value.feedback}    disabled  /> <div/>
                    <Input placeholder='Избранное'         title='Избранное'         value={value.favorite}    disabled  /> <div/>
                    <Input placeholder='Корзина'           title='Корзина'           value={value.cart}        disabled  /> <div/>
                  </Grid>
              }
              {
                current == '6' && //Корзина
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID корзины'         value={value.id}                        disabled /> <div/>
                    <Input placeholder='ID пользователя'    value={value.userId}                    disabled /> <div/>
                    <Input placeholder='ID товара'          value={value.items?.[0]?.productId}              /> <div/>
                  </Grid>
              }
              {
                current == '7' && //Избранное
                  <>
                    <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                      <Input placeholder='ID списка избранного'   value={value.id}                  disabled  /> <div/>
                      <Input placeholder='ID пользователя'        value={value.userId}              disabled  /> <div/>
                      <Input placeholder='ID товара'              value={value.productsIds?.[0]}              /> <div/>
                    </Grid>
                    <Table arrTitle={['ID товара', 'Название товара']}>
                      {
                        // value.productsIds?.map(elem => (
                          <Row  gridTemplateColumns='1fr 1fr 0.1fr'>
                            <div>123</div>
                          </Row>  
                        // ))
                      }

                    </Table>
                  </>
              }
              {
                current == '8' && //Заказы
                  <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                    <Input placeholder='ID заказа'       title='ID заказа'        value={value.id}                    /> <div/>
                    <Input placeholder='Дата заказа'     title='Дата заказа'      value={moment(Number(value.createdAt)).format('DD.MM.YYYY')}       /> <div/>
                    <Input placeholder='Номер заказа'    title='Номер заказа'     value={value.number}          /> <div/>
                    <Input placeholder='Статус'          title='Статус'           value={value.status}          /> <div/>
                    <Input placeholder='Сумма'           title='Сумма'            value={value.sum}             /> <div/>
                    <Input placeholder='ID пользователя' title='ID пользователя'  value={value.user?.userId}     /> <div/>
                    <Input placeholder='ФИО'             title='ФИО'              value={value.user?.fullName}   /> <div/>
                    <Input placeholder='Телефон'         title='Телефон'          value={value.user?.phone}      /> <div/>
                    <Input placeholder='E-mail'          title='E-mail'           value={value.user?.email}      /> <div/>
                    <Input placeholder='Адрес'           title='Адрес'            value={value.user?.addres}     /> <div/>
                    <Input placeholder='ID товара'       title='ID товара'        value={value.createdAt}       /> <div/>
                    {/* <Input placeholder='Дата заказа' type='date'/> <div/> */}
                  </Grid>
              }

              
              <Grid gridTemplateColumns='1fr 2fr' gap={15} style={{marginTop: '15px'}}>
                <Button 
                  title={query.entityId ? 'Сохранить' : 'Создать'} 
                  theme='main' 
                  onClick={() => query.entityId ?
                    updateEntityCategory(update_entity, value, current, () => Router.push(`${ADMIN}/${current}`))
                    :
                    createEntityCategory(create_entity, value, file, changeValue, current, () => Router.push(`${ADMIN}/${current}`))
                    // createEntityCategory(create_entity, file, changeValue, current, () => Router.push(`${ADMIN}/${current}`))
                  }
                />
              </Grid>
          </div>
        </Grid>
      </div>
    </AdminMainContainer>
  )
}
