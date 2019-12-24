import {_get, _post, _delete } from './http';


/*-------------- Authentication ---------------*/

export const register = (data) => _post('teacher/register', data);
export const login = (role, data) => _post(`${role}/login`, data);
export const logout = (data) => _post('logout', data);

/*-------------- Courses ---------------*/

export const getCourses = () => _get('api/teachers/courses');
export const postCourse = (data) => _post('', data);
export const deleteCourse = (data) => _delete('', data);

/*-------------- Unites ---------------*/

export const getUnits = (course_id) => _get(`api/teachers/units/${course_id}`);

/*-------------- Homeworks ---------------*/

export const getHomeworks = () => _get('');
export const getHomework = () => _get('api/teachers/homeworkInfo/:id');
export const postHomework = (data) => _post('', data);
export const deleteHomework = (data) => _delete('', data);
export const getHomeworkResults = (data) => _get('api/teachers/homeworkResults/:id', data);
export const getHomeworkStatistics = (data) => _get('api/teachers/statisticsInHomework/:id', data);
export const getHomeworkDetail = (data) => _get('api/teachers/resultsInHomeworkDetail/:id/:sentence_id', data);
export const getStudentResultInHomework = (data) => _get('api/teachers/studentResultsInHomework/:work_id/:std_id', data);
export const getResultDetalis = (data) => _get('api/teachers/viewResultDetail/:result_id', data);