import Vue from 'vue';
import Vuex from 'vuex';
import { userStore, courseStore } from './modules';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules:{
        userStore,
        courseStore,
    }
});
