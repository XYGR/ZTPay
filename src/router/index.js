import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
import home from "./home";

export default new Router({
    mode:'history',
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        ...home,
    ]
})