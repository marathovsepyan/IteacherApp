import * as type from './mutation-types';
import {
    getCourses,
} from '../../../../utils/endpoints';

const defaultState = {
    courses: [],
    course: {},
};

const getters = {
    getCourses: state => state.courses,
    getCourse: state => state.course,
};

const mutations = {
    [type.GET_COURSES]: (state, {courses}) => {
        state.courses = courses;
    },
};

const actions = {
    [type.GET_COURSES]: async ({commit}) => {
        const data = await getCourses();
        console.log("data", data);
        commit(type.GET_COURSES, {courses: data});
    },
};

export default {
    // namespaced: true,
    state: defaultState,
    actions,
    mutations,
    getters
};
