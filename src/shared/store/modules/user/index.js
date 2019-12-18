import { setLocalStorage, getLocalStorage, clearLocalStorage } from '../../../utils/localStorage';
import * as type from './mutation-types';
import { setAuthHeader } from '../../../utils/http';
import {
    login,
    register,
    logout
} from '../../../utils/endpoints';

const defaultState = {
    isAuthenticated: !!getLocalStorage('token'),
    token: getLocalStorage('token') || '',
    role: getLocalStorage('role') || '',
    user: JSON.parse(getLocalStorage('user')) || {},
};

const getters = {
    isAuthenticated: state => state.isAuthenticated,
    token: state => state.token,
    role: state => state.role,
    user: state => state.user
};

const mutations = {
    [type.LOGOUT]: (state) => {
        state.user = '';
        state.isAuthenticated = false;
        state.token = {};
        state.role = '';

        clearLocalStorage();
    },
    [type.SIGN_IN]: (state, {user, token, role}) => {
        state.user = user;
        state.isAuthenticated = true;
        state.token = token;
        state.role = role;
        setLocalStorage('token', token);
        setLocalStorage('role', role);
        setLocalStorage('user', JSON.stringify(user));
    },
    [type.SIGN_UP]: (state, {user, token, role}) => {
        state.user = user;
        state.isAuthenticated = true;
        state.token = token;
        state.role = role;
        setLocalStorage('token', token);
        setLocalStorage('role', role);
        setLocalStorage('user', JSON.stringify(user));
    },
};

const actions = {
    [type.LOGOUT]: async ({commit}) => {
        let token = getLocalStorage('token');
        await logout({token: token});
        commit(type.LOGOUT);
    },

    [type.SIGN_IN]: async ({commit}, {email, password}) => {
        let data = await login({email, password});

        if (data) {
            setAuthHeader(data.token);
            commit(type.SIGN_IN, {user: data.user[0], token: data.token});
        }
    },

    [type.SIGN_UP]: async ({commit}, {name, email, password}) => {
        let data = await register({name, email, password});

        if (data) {
            setAuthHeader(data.token);
            commit(type.SIGN_UP, { user: data.user[0], token: data.token });
        }
    },
};

export default {
    state: defaultState,
    actions,
    mutations,
    getters
};
