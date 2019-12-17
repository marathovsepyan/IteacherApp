import Vue from 'vue';

/* eslint-disable */

export const truncate = Vue.filter('truncate', (text, stop, clamp) => text.slice(0, stop) + (stop < text.length ? clamp || '...' : ''));
