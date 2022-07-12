import styles from './ProfileInfo.module.scss'

import React from 'react'
import Flex from '../../containers/Flex/Flex'
import Button from '../../elements/Button/Button'
import useObject from './../../../hooks/useObject';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../../../query/users/users.query';
import Cookies from 'js-cookie';
import Grid from './../../containers/Grid/Grid';
import { logout } from './../../../lib/logout';
import Router from 'next/router';
import { asyncUpdateUser } from './../../../query/users/users.reducers';
import { UPDATE_USER } from './../../../query/users/users.mutation';

function ProfileInfo() {
    const [edit, setEdit] = React.useState(false)

    const [update_user] = useMutation(UPDATE_USER)

    const {value, changeValue} = useObject()

    const {data, loading, refetch} = useQuery(GET_USER, {
        variables: {
            id: Cookies.get('userId')
        },
        onCompleted: data => changeValue({...data.getUser, userName: data.getUser?.name})
    })

    React.useEffect(() => {
        console.log('ProfileInfo value', value);
    }, [value])

    React.useEffect(() => {
        console.log('ProfileInfo data', data);
    }, [data])

  return (
    <div className={styles.profile_info_wrapper}>
        <h2>Аккаунт</h2>
        <Flex position='between' style={{marginBottom: '20px'}}>
            <div className={styles.user_name_block}>
                <p>{value.userName || '-'}</p>
            </div>
            <div className={styles.go_out} onClick={() => logout(() => Router.push('/'))}>Выйти</div>
        </Flex>
        <Button title='Редактировать' theme={edit ? 'disabled' : 'basket'} onClick={() => setEdit(old => !old)} /> {/* disabled={edit} */}
        <div className={styles.profile_info__user_info}>
            {/* <i>Логин</i> */}
            <i>Почта</i>
            <input value={value.email || (edit ? '' : '-')} className={edit ? styles.enter_data : ''} onChange={e => changeValue({email: e.target.value})}/>

            {/* <span onClick={() => alert('Измени пароль!')}>Изменить пароль</span> */}
            <hr/>
            <i>Имя</i>
            <input value={value.name || (edit ? '' : '-')} className={edit ? styles.enter_data : ''} onChange={e => changeValue({name: e.target.value})}/>

            {/* <i>Дата рождения</i>
            <input value={'00.00.0000!'} className={edit ? styles.enter_data : ''} onChange={e => changeValue({email: e.target.value})}/> */}

            {/* <i>Почта</i>
            <input value={value.email || (edit ? '' : '-')} className={edit ? styles.enter_data : ''} onChange={e => changeValue({email: e.target.value})}/> */}

            <i>Телефон</i>
            <input value={value.phone || (edit ? '' : '-')} className={edit ? styles.enter_data : ''} onChange={e => changeValue({phone: e.target.value})}/>
        </div>
        {
            edit &&
                <Grid length={2}  style={{marginTop: '26px'}}>
                    <Button title='Отмена' theme='cancel' onClick={() => {setEdit(false); refetch().then(res => changeValue(res.data.getUser))}}/>
                    <Button title='Сохранить' theme='basket' onClick={() => {asyncUpdateUser(update_user, value, () => {setEdit(false); refetch().then(res => changeValue(res.data.getUser))}, () => alert('Не удалось обновить данные!'))}}/>
                </Grid>
        }
    </div>
  )
}

export default ProfileInfo