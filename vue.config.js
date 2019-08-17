module.exports = {
    devServer:{
        proxy: {
            '/smartgold': {
                target: 'http://119.23.189.240:8080',
                changeOrigin: true,
                ws: true
            },
            '/api': {
                target: 'http://smartgold.natapp1.cc',
                changeOrigin: true,
                ws: true,
                pathRewrite:{
                    '^/api': '/'
                }
            },
        }
    }

}
