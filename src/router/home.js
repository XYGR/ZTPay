export default [
    {
        path:"/home",
        component:()=>import('../pages/Home/Home/Home'),
        children:[
            {
                path:"/home/msg/:id",
                component:()=>import('../pages/Home/Msg/Msg'),
            }
        ]
    }
]