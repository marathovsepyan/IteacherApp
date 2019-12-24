import * as type from './mutation-types';
import {
    getUnites,
} from '../../../../utils/endpoints';

const defaultState = {
    units: [],
    unit: {},
};

const getters = {
    getUnits: state => state.units,
    getCourse: state => state.unit,
};

const mutations = {
    [type.GET_UNITS]: (state, {unites}) => {
        state.unite = unites;
    },
};

const actions = {
    getUnites: async ({commit}, { course_id, }) => {
        const data = await getUnites(course_id);
        commit(type.GET_UNITS, {units: data});
    },
};

export default {
    // namespaced: true,
    state: defaultState,
    actions,
    mutations,
    getters
};
