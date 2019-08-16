module.exports = {
    devServer:{
        proxy: {
            '/api': {
                target: 'http://smartgold.natapp1.cc',
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    '^/api':'/'
                }
            },
        }
    }

}
