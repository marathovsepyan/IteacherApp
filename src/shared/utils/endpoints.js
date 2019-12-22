import {_get, _post, _delete, } from './http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('teacher/register', data);
export const login = (data) => _post('teacher/login', data);
export const logout = (data) => _post('logout', data);

/*-------------- Coreses ---------------*/

export const getCourses = () => _get('api/teachers/courses');
export const postCourse = (data) => _post('', data);
export const deleteCourse = (data) => _delete('', data);

/*-------------- Homeworks ---------------*/

export const getHomeworks = () => _get('');
export const postHomework = (data) => _post('', data);
export const deleteHomework = (data) => _delete('', data);