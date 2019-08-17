/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 17:20:18
 * @LastEditTime: 2019-08-17 16:43:54
 * @LastEditors: Please set LastEditors
 */
import api from "../../net/api";
import {post,get} from "../../net/require";
export default {
    namespaced: true,
    state:{
        userCode:"",
        // 首页需要的用户名信息
        userName:"",
    },
    mutations:{
        setUserCode(state,params){
             state.userCode=params
        },
        setUserName(state,params){
            state.userName=params;
        }

    },
    actions:{
 
        requireCodeData(context,username){
            //用户的邮箱账号数据
            context.commit('setUserName',username)
            // 验证码数据
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