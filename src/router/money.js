export default [
    {
        //理财页面
        path:"/money",
        component:()=>import('../pages/Money/Money/Money'),
        children:[
            {
                //投标页面
                path:"bid/:id",
                component:()=>import('../pages/Money/Bid/Bid'),
                children:[
                    {
                        //投标页面
                        path:"success/:amount",
                        component:()=>import('../pages/Money/BidSuccess/BidSuccess'),
                    }
                ]
            }
        ]
    }
]