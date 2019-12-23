import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { REST_API } from '../../../config/env';
import { getLocalStorage, clearLocalStorage } from './localStorage';

let isLoggedToken = getLocalStorage('token');
let role = getLocalStorage('role');
let isLoggedTokenBoolean = !!isLoggedToken;

Vue.use(VueAxios, axios.create({
    baseURL: REST_API,
    headers: { Accept: 'application/json' },
}));

Vue.axios.defaults.baseURL = REST_API;

const success = (resolve, response) => resolve(response.data);
const error = (reject, err) => reject(err);

const request = (method, url, data, config = {}) => new Promise((resolve, reject) => {
    if (!(['get', 'post', 'put', 'patch', 'delete'].includes(method))) throw new Error(`Http method ${method} does not supported`);

    if (isLoggedTokenBoolean){
        config['token'] = isLoggedToken;
    }

    if (['post', 'put', 'patch', 'delete'].includes(method)) {
        return Vue.axios({
            method,
            url,
            data,
            ...config,
        }).then(resp => success(resolve, resp))
            .catch(r => error(reject, r));
    }

    return Vue.axios({
        method,
        url,
        params: data,
        ...config,
    })
        .then(resp => success(resolve, resp))
        .catch(r => error(reject, r));
});

export const _get = (url, data, config) => request('get', REST_API + url, data, config);
export const _post = (url, data, config) => request('post', REST_API + url, data, config);
export const _put = (url, data, config) => request('put', REST_API + url, data, config);
export const _patch = (url, data, config) => request('patch', REST_API + url, data, config);
export const _delete = (url, data, config) => request('delete', REST_API + url, data, config);

export const setAuthHeader = (token) => {
    Vue.axios.defaults.headers.authorization = `${token}`;
};

// Add a response interceptor
Vue.axios.interceptors.response.use((response) => {
    if (response.data.error === 'tokenError') {
        const redirectionSubPath = role === 'teacher' ? '/teacher' : '';
        clearLocalStorage();
        window.location.href = `${redirectionSubPath}/login`;
    }
    return Promise.resolve(response);
}, err => Promise.reject(err));
