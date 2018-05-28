import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import App from './App.vue';
import displayItem from './components/displayItem.vue';
import createItem from './components/createItem.vue';
import editItem from './components/editItem.vue';

const routes = [
    {
        name: 'displayItem',
        path: '/',
        component: displayItem
    },
    {
        name: 'createItem',
        path: '/create/item',
        component: createItem
    },
    {
        name: 'editItem',
        path: '/edit/item/:id',
        component: editItem
    }
];

const router = new VueRouter({mode: 'history', routes: routes});
new Vue(Vue.util.extend({router}, App)).$mount(('#app'));