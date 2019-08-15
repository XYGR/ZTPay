/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 21:26:53
 * @LastEditTime: 2019-08-15 10:51:30
 * @LastEditors: Please set LastEditors
 */
export default {
    path: '/login',
    componnent:()=>import('../pages/Login/LogNum/logNum'),
    children:
    [
    {
        path:'passWord/:nums',
        componnent:()=>import('../pages/Login/LogPass/logPass')
    },
    {
        path:'passNum/:nums',
        componnent:()=>import('../pages/Login/LogMess/logMess') 
    }
    ]
}

