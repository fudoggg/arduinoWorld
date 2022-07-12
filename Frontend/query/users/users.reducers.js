
import Cookies from 'js-cookie';
export const asyncRegisterUser = async (registerUser, value, callback, callbackError) => {
    try{
        if (value.password != value.doublePassword){
            alert('Пароли не совпадают')
            throw new Error('Пароли не совпадают')
        } 

        await registerUser({
            variables: {
                email: value.email,
                password: value.password,
                name: value.userName,
            }
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncLoginUser = async (loginUser, value, callback, callbackError) => {
    try{
        await loginUser({
            variables: {
                email: value.email,
                password: value.password,
            },
        })
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}

export const asyncUpdateUser = async (updateUser, value, callback, callbackError) => {
    try{
        await updateUser({
            variables: {
                id: Cookies.get('userId'),
                email: value.email,
                phone: value.phone,
                name: value.name
            },
        })
        localStorage.setItem('userName', value.name)
        callback?.()
    }catch (e) {
        callbackError?.()
        console.log(e)
    }
}