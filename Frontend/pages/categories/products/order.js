import styles from '../../../styles/pages/categories/products/order.module.scss'
import React from 'react'
import Input from '../../../components/elements/Input/Input'
import Grid from './../../../components/containers/Grid/Grid';
import CheckedBlock from '../../../components/elements/CheckedBlock/CheckedBlock'
import Router from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CART_BY_USER } from '../../../query/carts/carts.query'
import { GET_PRODUCTS } from './../../../query/products/products.query';
import Cookies from 'js-cookie';
import useObject from './../../../hooks/useObject';
import { CREATE_ORDER } from './../../../query/order/order.mutation';
import { asyncCreateOrder } from '../../../query/order/order.reducers'

function Order() {
    const [get, setGet] = React.useState('pickup')
    const [pay, setPay] = React.useState('whenGet')

    const {value, changeValue} = useObject({
        user: {
            userId: Cookies.get('userId')
        },
        isDeliver: false,
    })

    const [create_order] = useMutation(CREATE_ORDER)


  const {data: dataCart, loading: loadingCart} = useQuery(GET_CART_BY_USER, {
    skip: !(!!Cookies.get('userId')),
    fetchPolicy: 'network-only',
    variables:{
      userId: Cookies.get('userId'),
      order: !!Cookies.get('userId'),
    },
    onCompleted: data => { 
        console.log(data); 
        changeValue({
            sum: data.getCartByUserID?.totalPrice, 
            count: data.getCartByUserID?.sumOf, 
            items: data.getCartByUserID?.items.map(elem => ({count: elem.count, productId: elem.productId._id}))
        })
    }
  })

  React.useEffect(() => {
      console.log('value', value);
  }, [value])
  
  React.useEffect(() => {
      changeValue({isDeliver: get == 'pickup' ? false : true})
  }, [get])

  return (
    <div className={styles.order_wrapper}>
        <div className={styles.main_block}>
            <div className={styles.order_header_wrapper}>
                <div className={styles.left_logo} onClick={() => Router.push('/')}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.7027 0.36036C22.7027 0.161339 22.864 0 23.0631 0H23.4234C23.6224 0 23.7838 0.161339 23.7838 0.36036V2.16216C24.1818 2.16216 24.5045 2.48484 24.5045 2.88288V5.04504H28.1081V2.88288C28.1081 2.48484 28.4308 2.16216 28.8288 2.16216V0.36036C28.8288 0.161339 28.9902 0 29.1892 0H29.5495C29.7486 0 29.9099 0.161339 29.9099 0.36036V2.16216C30.308 2.16216 30.6306 2.48484 30.6306 2.88288V5.04504H32.0721C33.6643 5.04504 34.955 6.33575 34.955 7.92793V9.36937H37.1171C37.5153 9.36937 37.8378 9.69204 37.8378 10.0901H39.6396C39.8386 10.0901 40 10.2514 40 10.4504V10.8108C40 11.0098 39.8386 11.1712 39.6396 11.1712H37.8378C37.8378 11.5692 37.5153 11.8919 37.1171 11.8919H34.955V15.4955H37.1171C37.5153 15.4955 37.8378 15.8182 37.8378 16.2162H39.6396C39.8386 16.2162 40 16.3776 40 16.5766V16.9369C40 17.136 39.8386 17.2973 39.6396 17.2973H37.8378C37.8378 17.6954 37.5153 18.018 37.1171 18.018H34.955V21.6216H37.1171C37.5153 21.6216 37.8378 21.9443 37.8378 22.3423H39.6396C39.8386 22.3423 40 22.5037 40 22.7027V23.0631C40 23.2621 39.8386 23.4234 39.6396 23.4234H37.8378C37.8378 23.8215 37.5153 24.1441 37.1171 24.1441H34.955V27.7477H37.1171C37.5153 27.7477 37.8378 28.0704 37.8378 28.4685H39.6396C39.8386 28.4685 40 28.6298 40 28.8288V29.1892C40 29.3882 39.8386 29.5495 39.6396 29.5495H37.8378C37.8378 29.9476 37.5153 30.2703 37.1171 30.2703H34.955V32.0721C34.955 33.6643 33.6643 34.955 32.0721 34.955H30.6306V37.1171C30.6306 37.5153 30.308 37.8378 29.9099 37.8378V39.6396C29.9099 39.8386 29.7486 40 29.5495 40H29.1892C28.9902 40 28.8288 39.8386 28.8288 39.6396V37.8378C28.4308 37.8378 28.1081 37.5153 28.1081 37.1171V34.955H24.5045V37.1171C24.5045 37.5153 24.1818 37.8378 23.7838 37.8378V39.6396C23.7838 39.8386 23.6224 40 23.4234 40H23.0631C22.864 40 22.7027 39.8386 22.7027 39.6396V37.8378C22.3046 37.8378 21.982 37.5153 21.982 37.1171V34.955H18.3784V37.1171C18.3784 37.5153 18.0557 37.8378 17.6577 37.8378V39.6396C17.6577 39.8386 17.4963 40 17.2973 40H16.9369C16.7379 40 16.5766 39.8386 16.5766 39.6396V37.8378C16.1785 37.8378 15.8559 37.5153 15.8559 37.1171V34.955H12.2523V37.1171C12.2523 37.5153 11.9296 37.8378 11.5315 37.8378V39.6396C11.5315 39.8386 11.3702 40 11.1712 40H10.8108C10.6118 40 10.4504 39.8386 10.4504 39.6396V37.8378C10.0524 37.8378 9.72973 37.5153 9.72973 37.1171V34.955H7.92793C6.33575 34.955 5.04504 33.6643 5.04504 32.0721V30.2703H2.88288C2.48484 30.2703 2.16216 29.9476 2.16216 29.5495H0.36036C0.161339 29.5495 0 29.3882 0 29.1892V28.8288C0 28.6298 0.161339 28.4685 0.36036 28.4685H2.16216C2.16216 28.0704 2.48484 27.7477 2.88288 27.7477H5.04504V24.1441H2.88288C2.48484 24.1441 2.16216 23.8215 2.16216 23.4234H0.36036C0.161339 23.4234 0 23.2621 0 23.0631V22.7027C0 22.5037 0.161339 22.3423 0.36036 22.3423H2.16216C2.16216 21.9443 2.48484 21.6216 2.88288 21.6216H5.04504V18.018H2.88288C2.48484 18.018 2.16216 17.6954 2.16216 17.2973H0.36036C0.161339 17.2973 0 17.136 0 16.9369V16.5766C0 16.3776 0.161339 16.2162 0.36036 16.2162H2.16216C2.16216 15.8182 2.48484 15.4955 2.88288 15.4955H5.04504V11.8919H2.88288C2.48484 11.8919 2.16216 11.5692 2.16216 11.1712H0.36036C0.161339 11.1712 0 11.0098 0 10.8108V10.4504C0 10.2514 0.161339 10.0901 0.36036 10.0901H2.16216C2.16216 9.69204 2.48484 9.36937 2.88288 9.36937H5.04504V7.92793C5.04504 6.33575 6.33575 5.04504 7.92793 5.04504H9.72973V2.88288C9.72973 2.48484 10.0524 2.16216 10.4504 2.16216V0.36036C10.4504 0.161339 10.6118 0 10.8108 0H11.1712C11.3702 0 11.5315 0.161339 11.5315 0.36036V2.16216C11.9296 2.16216 12.2523 2.48484 12.2523 2.88288V5.04504H15.8559V2.88288C15.8559 2.48484 16.1785 2.16216 16.5766 2.16216V0.36036C16.5766 0.161339 16.7379 0 16.9369 0H17.2973C17.4963 0 17.6577 0.161339 17.6577 0.36036V2.16216C18.0557 2.16216 18.3784 2.48484 18.3784 2.88288V5.04504H21.982V2.88288C21.982 2.48484 22.3046 2.16216 22.7027 2.16216V0.36036Z" fill="url(#paint0_linear_351_355)"/>
                        <path d="M25.5219 25.2248C24.0718 25.2248 22.8322 24.7478 21.7409 23.7722C21.0668 23.1698 20.5111 22.4316 19.9998 21.6641C19.4886 22.4316 18.9327 23.1698 18.2588 23.7722C17.0865 24.82 15.7422 25.2931 14.1502 25.2169C11.1142 25.2041 8.64844 22.8668 8.64844 19.9956C8.64844 17.1167 11.1278 14.7744 14.1754 14.7744C15.8431 14.7744 17.2467 15.3128 18.4674 16.4197C19.0451 16.9605 19.559 17.5625 19.9998 18.2145C20.4405 17.5625 20.9545 16.9605 21.5322 16.4197C22.7525 15.3124 24.1565 14.7744 25.8242 14.7744C28.8718 14.7744 31.3511 17.1167 31.3511 19.9956C31.3511 22.8668 28.8854 25.2041 25.8493 25.2169C25.739 25.2222 25.6299 25.2248 25.5219 25.2248ZM21.1101 19.926C21.7149 20.8834 22.302 21.7744 23.0171 22.4137C23.8242 23.1353 24.6749 23.4321 25.7748 23.3754L25.8242 23.3741C27.8304 23.3741 29.4621 21.8587 29.4621 19.9956C29.4621 18.1326 27.8301 16.6172 25.8242 16.6172C24.64 16.6172 23.6849 16.9833 22.8188 17.7694C22.1718 18.3566 21.6376 19.1089 21.1101 19.9257V19.926ZM14.1754 16.6172C12.1692 16.6172 10.5374 18.1326 10.5374 19.9956C10.5374 21.8587 12.1694 23.3741 14.1754 23.3741L14.2249 23.3754C15.3248 23.4321 16.1754 23.1353 16.9825 22.4137C17.6976 21.7744 18.2847 20.8834 18.8895 19.926C18.362 19.1089 17.8278 18.3566 17.1809 17.7698C16.3145 16.9833 15.3594 16.6172 14.1754 16.6172Z" fill="white"/>
                        <path d="M26.0735 19.3264V18.3271H25.0076V19.3264H23.9834V20.3617H25.0076V21.3684H26.0735V20.3617H27.0979V19.3264H26.0735Z" fill="white"/>
                        <path d="M12.6416 19.3135H16.0084V20.381H12.6416V19.3135Z" fill="white"/>
                        <defs>
                        <linearGradient id="paint0_linear_351_355" x1="33.8739" y1="1.44144" x2="3.18124e-07" y2="36.7568" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7DDEE1"/>
                        <stop offset="1" stopColor="#00979C"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <h1>Arduino world</h1>
                </div>

                    <div className={styles.info__block}>
                        <p>{`Количество товаров: ${value.count || 0}`}</p>
                        <h1>{`Сумма: ${value.sum || 0} ₽`}</h1>
                    </div>
            </div>
            <h1/>
            <Grid length={1} gap={40}>
                <div>
                    <h1>Данные покупателя</h1>
                    <Grid length={4}>
                        <Input placeholder='Телефон'                    onChange={e => changeValue({user: {...value.user, phone: e.target.value}})}/>
                        <Input placeholder='E-mail (необязательно)'     onChange={e => changeValue({user: {...value.user, email: e.target.value}})}/>
                    </Grid>
                </div>
                <div>
                    <h1>Выберите способ получения</h1>
                    <Grid length={1} gap={15}>
                        <CheckedBlock
                            name='caseGet'
                            obj={{
                                'pickup': 'Самовывоз',
                                'delivery': 'Доставка'
                            }}
                            active={get}
                            setActive={setGet}
                        />
                        {
                            get == 'pickup' && 
                                <div className={styles.get_block}>
                                    {/* //  <Input value='г. Оренбург, ​проспект Дзержинского, 23' disabled/> */}
                                    г. Оренбург, ​проспект Дзержинского, 23
                                </div>
                        }
                        {
                            get == 'delivery' && 
                                <Grid gridTemplateColumns='1fr 2fr' gap={15}>
                                    <Input placeholder='Фамилия имя получателя'     onChange={e => changeValue({user: {...value.user, fullName: e.target.value}})}/> <div/>
                                    <Input placeholder='Улица, дом, квартира'       onChange={e => changeValue({user: {...value.user, addres: e.target.value}})}/>
                                </Grid>
                        }
                    </Grid>
                </div>
                <div>
                    <h1>Выберите способ оплаты</h1>
                    <Grid length={1} gap={15}>
                        <CheckedBlock
                            name='casePay'
                            obj={{
                                'whenGet': 'При получении',
                                'banckcard': 'Банковская карта',
                                // 'ymoney': 'ЮMoney',
                                // 'qiwi': 'QIWI Wallet',
                                // 'sberpay': 'Sberpay',
                            }}
                            active={pay}
                            setActive={setPay}
                        />
                        {
                            pay == 'banckcard' && 
                                <div className={styles.card_data_block}>
                                    <div className={styles.front}>
                                        <Grid length={1} gap={15}>
                                            <Input placeholder='Имя фамилия'/>
                                            <Input placeholder='Номер карты'/>
                                            <Grid gridTemplateColumns='3fr 1fr 3fr'>
                                                <Input placeholder='Месяц'/>
                                                <h1 style={{textAlign:'center'}}>/</h1>
                                                <Input placeholder='Год'/>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div className={styles.back}>
                                        <div className={styles.cvc}>
                                            <Input type='password' placeholder='CVC' />
                                        </div>
                                    </div>
                                </div>
                        }
                    </Grid>
                </div>
                <div>
                    <div className={styles.order_button} onClick={() => {
                        asyncCreateOrder(create_order, value, () => {alert('Заказ оформлен'); Router.push('/')}, () => alert('Не удалось оформить заказ'))
                    }}>Подтвердить заказ</div>
                </div>
            </Grid>
        </div>
            

            
            
    </div>
  )
}

export default Order