import {_post} from './http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('register', data);
export const login = (data) => _post('login', data);
export const logout = (data) => _post('logout', data);
