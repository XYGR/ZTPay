/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 17:20:18
 * @LastEditTime: 2019-08-17 13:58:38
 * @LastEditors: Please set LastEditors
 */
import api from "../../net/api";
import {post,get} from "../../net/require";
export default {
    namespaced: true,
    state:{
        userCode:""
    },
    mutations:{
        setUserCode(state,params){
             state.userCode=params
        }

    },
    actions:{
 
        requireCodeData(context,username){
            console.log(username)
            get(api.USER_PASSCODE_LOGIN+'?email='+username).then(res=>{
                console.log(res);
                    let data= res.data.date
                    console.log(data)
                    context.commit('setUserCode',data)
            })
            // post(api.USER_PASSCODE_LOGIN,{email:username}).then(res=>{
            //     console.log(res);
            //         let data= res.data
            //         context.commit('setUserCode',data)
            // })
        }
        
    }
}