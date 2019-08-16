export default [
    {
        path:"/home",
        component:()=>import('../pages/Home/Home/Home'),
        children:[
            {
                path:"msg/:id",
                component:()=>import('../pages/Home/Msg/Msg'),
                children:[
                    {
                        path:"Issues",
                        component:()=>import('../pages/Home/Msg/Children/Issues'),
                    },
                    {
                        path:"Manage",
                        component:()=>import('../pages/Home/Msg/Children/Manage'),
                    },
                    {
                        path:"Records",
                        component:()=>import('../pages/Home/Msg/Children/Records'),
                    }
                ]
            }
        ]
    }
]