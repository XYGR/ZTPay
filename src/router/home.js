export default [
    {
        path:"/home",
        component:()=>import('../pages/Home/Home/Home'),
        children:[
            {
                path:"msg/:id",
                component:()=>import('../pages/Home/Msg/Msg'),
            }
        ]
    }
]