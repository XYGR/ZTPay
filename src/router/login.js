/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-16 10:45:35
 * @LastEditors: Please set LastEditors
 */
export default [
    {
        path: '/login',
        component: () => import('../pages/Login/LogNum/logNum'),
        children: [
            {
                path: 'passWord',
                component: () => import('../pages/Login/LogPass/logPass')
            },
            {
                path: 'passMess',
                component: () => import('../pages/Login/LogMess/logMess')
            }
        ]
    }
]