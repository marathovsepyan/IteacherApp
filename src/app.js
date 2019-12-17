import {_get, _post, _put, _patch,_delete} from './utils/http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('register',data);
export const login = (data) => _post('login',data);
export const logout = (data) => _post('logout',data);


/*-------------- Homeworks ---------------*/

export const getHomeworks = () => _get('homeworks');



/*-------------- Students ---------------*/

export const getStudents = () => _get('students');