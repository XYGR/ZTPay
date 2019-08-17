export default [
    {
        //我的
        path: '/mine',
        component: () => import('../pages/Mine/Mine/Mine'),
        children: [
            {
                // 银行卡
                path: 'bankcard',
                component: () => import('../pages/Mine/BankCard/BankCard'),
                children:[
                    {
                        //添加银行卡
                        path: 'add',
                        component: () => import('../pages/Mine/BankCardAdd/BankCardAdd'),
                        children:[
                            {
                                //添加成功
                                path: 'success',
                                component: () => import('../pages/Mine/BankCardSuccess/BankCardSuccess'),
                            }
                        ]
                    },
                ]
            },
            {
                // 资产
                path: 'assets',
                component: () => import('../pages/Mine/Assets/Assets'),
                children:[
                    {
                        //充值
                        path: 'invest',
                        component: () => import('../pages/Mine/AssetsInvest/AssetsInvest'),
                        children:[
                            {
                                //充值成功
                                path: 'success',
                                component: () => import('../pages/Mine/AssetsSuccess/AssetsSuccess'),
                            },
                        ]
                    },
                    {
                        //提现
                        path: 'cash',
                        component: () => import('../pages/Mine/Cash/Cash'),
                        children:[
                            {
                                //提现成功
                                path: 'mine/cash/success',
                                component: () => import('../pages/Mine/CashSuccess/CashSuccess'),
                            }
                        ]
                    },
                ]
            }
        ]
    }
]