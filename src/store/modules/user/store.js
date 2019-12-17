import { getLocalStorage } from '../../../utils/localStorage';

const initialState = {
    token: getLocalStorage('token') || '',
    user: JSON.parse(getLocalStorage('user')) || {},
};

const getters = {
};

const mutations = {
};

const actions = {
};

export default{
    state:initialState,
    actions,
    mutations,
    getters
}