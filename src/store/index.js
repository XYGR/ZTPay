/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-16 18:36:42
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import homeStore from "./modules/homeStore";
import moneyStore from "./modules/moneyStore";
import mineStore from "./modules/mineStore";
import loginStore from './modules/loginStore'

export default new Vuex.Store({
    modules:{
        homeStore,
        moneyStore,
        mineStore,
        loginStore
    }
})