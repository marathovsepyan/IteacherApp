import {_post} from './http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('teacher/register', data);
export const login = (data) => _post('teacher/login', data);
export const logout = (data) => _post('logout', data);
