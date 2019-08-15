/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 20:41:10
 * @LastEditTime: 2019-08-15 11:53:20
 * @LastEditors: Please set LastEditors
 */

import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
import home from "./home";
import login from './login';
import money from "./money";
import mine from "./mine";

export default new Router({
    mode:'history',
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        ...home,
        ...login,
        ...money,
        ...mine
    ]
})