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
                path: 'passNum/:nums',
                component: () => import('../pages/Login/LogMess/logMess')
            }
        ]
    }
]