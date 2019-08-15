import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import homeStore from "./modules/homeStore";
import moneyStore from "./modules/moneyStore";
import mineStore from "./modules/mineStore";

export default new Vuex.Store({
    modules:{
        homeStore,
        moneyStore,
        mineStore
    }
})