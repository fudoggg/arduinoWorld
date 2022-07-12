
import Cookies from 'js-cookie';

export const logout = (callback) => {
    Cookies.remove('jwt')
    Cookies.remove('userId')
    Cookies.remove('role')
    localStorage.removeItem('userName')
    callback?.()
}