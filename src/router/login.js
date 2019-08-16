/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-15 21:41:30
 * @LastEditors: Please set LastEditors
 */
export default [
    {
        path: '/login',
        component: () => import('../pages/Login/LogNum/logNum'),
        children: [
            {
                path: 'passWord/:nums',
                component: () => import('../pages/Login/LogPass/logPass')
            },
            {
                path: 'passMess/:nums',
                component: () => import('../pages/Login/LogMess/logMess')
            }
        ]
    }
]