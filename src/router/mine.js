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
            },
            {
                // 资产
                path: 'mine/assets',
                component: () => import('../pages/Mine/Assets/Assets'),
                children:[
                    {
                        //充值
                        path: 'mine/assets/invest',
                        component: () => import('../pages/Mine/AssetsInvest/AssetsInvest'),
                    },
                    {
                        //充值成功
                        path: 'mine/assets/success',
                        component: () => import('../pages/Mine/AssetsSuccess/AssetsSuccess'),
                    },
                    {
                        //提现
                        path: 'mine/cash',
                        component: () => import('../pages/Mine/Cash/Cash'),
                    },
                    {
                        //提现成功
                        path: 'mine/cash/success',
                        component: () => import('../pages/Mine/CashSuccess/CashSuccess'),
                    }
                ]
            }
        ]
    }
]