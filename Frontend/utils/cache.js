import { makeVar } from "@apollo/client";
import Cookies from 'js-cookie';


export const user = makeVar({
    userId: Cookies.get('userId'),
    role: Cookies.get('role'),
})