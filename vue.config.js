/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 08:37:02
 * @LastEditTime: 2019-08-17 11:38:46
 * @LastEditors: Please set LastEditors
 */
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
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
