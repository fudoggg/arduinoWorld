import styles from './LoginForm.module.scss'

import React from 'react'
import Router from 'next/router';
import { ADMIN } from './../../../utils/paths';
import Input from './../../elements/Input/Input';
import useObject from './../../../hooks/useObject';
import { useMutation } from '@apollo/client';
import { REGISTER_USER, LOGIN_USER } from './../../../query/users/users.mutation';
import { asyncLoginUser, asyncRegisterUser } from '../../../query/users/users.reducers';
import Cookies from 'js-cookie'
import Flex from './../../containers/Flex/Flex';
import { user } from './../../../utils/cache';

function LoginForm({active, setActive}) {
  const [isRegistration, setIsRegistration] = React.useState(false)
  const {value, changeValue} = useObject()

  const [register_mutation] = useMutation(REGISTER_USER, {
    onCompleted: () => setActive(false),
    onError: error => alert(error.networkError?.result?.errors?.[0].message)
  })
  const [login_mutation] = useMutation(LOGIN_USER, {
    onCompleted: data => {
      Cookies.set('jwt', data.login.token)
      Cookies.set('userId', data.login.userId)
      Cookies.set('role', data.login.role)
      localStorage.setItem('userName', data.login.userName)

      user().userId = data.login.userId
      user().role = data.login.role
      setActive(false)
    },
    onError: error => alert(error.networkError?.result?.errors?.[0].message)
  })

  return (
    <div className={styles.login_wrapper} onClick={() => setActive(false)}>
      <div 
        className={styles.login_window + ' ' + styles.active} 
        onClick={e => {
            e.stopPropagation();
        }} 
      >
          {
              isRegistration ?
                <div>
                    <h1>Регистрация</h1>
                    <Flex gap={0} style={{justifyContent: "center"}}>
                      <div className={styles.div_input}>
                        <Input placeholder='e-mail' onChange={e => changeValue({email: e.target.value})}/>
                        <Input type='password' placeholder='Пароль' onChange={e => changeValue({password: e.target.value})}/>
                        <Input type='password' placeholder='Подтвердите пароль' onChange={e => changeValue({doublePassword: e.target.value})}/>
                        <Input placeholder='Имя пользователя' onChange={e => changeValue({userName: e.target.value})}/>
                      </div>
                    <div className={styles.btn} onClick={() => {
                      asyncRegisterUser(register_mutation, value)
                    }}>Зарегестрироватся</div>
                    </Flex>
                    <p onClick={() => setIsRegistration(false)}>Назад</p>
                </div>
                :
                <div>
                    <h1>Вход</h1>
                    <Flex gap={0} style={{justifyContent: "center"}}>
                      <div className={styles.div_input}>
                      <Input placeholder='e-mail' onChange={e => changeValue({email: e.target.value})}/>
                      <Input type='password' placeholder='Пароль' onChange={e => changeValue({password: e.target.value})}/>
                      </div>
                    {/* <span>Забыли пароль?</span> */}
                    {/* <Button theme='main' title='Войти' onClick={() => Router.push(`${ADMIN}/1`)}/> */}
                    <div className={styles.btn} onClick={() => {
                      asyncLoginUser(login_mutation, value, () => {Cookies.get('role') == 'admin' && Router.push(`${ADMIN}/1`)})
                    }}>Войти</div>
                    </Flex>
                    <p onClick={() => setIsRegistration(true)}>Зарегестрироваться</p>
                </div>
                
          }
        
      </div>
    </div>
  )
}

export default LoginForm