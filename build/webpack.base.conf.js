var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: { // 给以下路径起别名
            // resolve('src') 代表 src 目录 
            // resolve('src/components') 代表 src/components/ 目录
            // 同理 可 推断出其他目录
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'components': resolve('src/components'),
            'libs': resolve('src/libs'), // 那么 libs  这个字符串就能代表了路径  src/libs
            'less': resolve('src/less'),
        }
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                  loader: 'expose-loader',
                  options: '$'
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: [ 'happypack/loader?id=js' ],
                include: [resolve('src'), resolve('test')]
            },

            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: [ 'babel-loader' ]
        })
    ]
}
