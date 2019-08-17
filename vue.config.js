module.exports = {
    devServer:{
        proxy: {
            '/smartgold': {
                target: 'http://119.23.189.240:8080',
                changeOrigin: true,
                ws: true
            },
        }
    }

}
