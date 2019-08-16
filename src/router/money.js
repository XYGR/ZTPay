export default [
    {
        path:"/money",
        component:()=>import('../pages/Money/Money/Money'),
        children:[
            {
                path:"bid/:id",
                component:()=>import('../pages/Money/Bid/Bid'),
            }
        ]
    }
]