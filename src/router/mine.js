export default [
    {
        //我的
        path: '/mine',
        component: () => import('../pages/Mine/Mine/Mine'),
        children: [
            {
                // 银行卡
                path: 'mine/bankcard',
                component: () => import('../pages/Mine/BankCard/BankCard'),
                children:[
                    {
                        //添加银行卡
                        path: 'mine/bankcard/add',
                        component: () => import('../pages/Mine/BankCardAdd/BankCardAdd'),
                    },
                    {
                        //添加成功
                        path: 'mine/bankcard/success',
                        component: () => import('../pages/Mine/BankCardSuccess/BankCardSuccess'),
                    }
                ]
            }
        ]
    }
]