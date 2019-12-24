import * as type from './mutation-types';
import {
    getUnits,
} from '../../../../utils/endpoints';

const defaultState = {
    units: [],
    isPublished: false,
    unit: {},
};

const getters = {
    getUnits: state => state.units,
    getUnit: state => state.unit,
};

const mutations = {
    [type.SET_UNITS]: (state, {ispublished, units}) => {
        state.units = units;
        state.isPublished = ispublished;
    },
};

const actions = {
    getUnits: async ({commit}, { course_id, }) => {
        const { ispublished, units } = await getUnits(course_id);
        commit(type.SET_UNITS, {ispublished, units});
    },
};

export default {
    // namespaced: true,
    state: defaultState,
    actions,
    mutations,
    getters
};
