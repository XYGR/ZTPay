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
            },
            {
                //消息列表
                path:'notice',
                component: () => import('../pages/Mine/Notice/Notice'),
                children:[
                    {
                        //消息详情
                        path: 'detail',
                        component: () => import('../pages/Mine/NoticeDetail/NoticeDetail'),
                    }
                ]
            },
            {
                //消息列表
                path:'bill',
                component: () => import('../pages/Mine/Bill/Bill'),
                children:[]
            },
            {
                //投标
                path:'bid',
                component: () => import('../pages/Mine/Bid/Bid'),
                children:[
                    {
                        //收益记录
                        path:'profit',
                        component: () => import('../pages/Mine/Profit/Profit'),
                    },
                    {
                        //交易记录
                        path:'transaction',
                        component: () => import('../pages/Mine/Transaction/Transaction'),
                    }
                ]
            }
        ]
    }
]