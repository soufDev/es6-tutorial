const path = require('path')
const UrglifyJSPlugin  = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV === "dev"

let config = {
    entry: {
        main: './js/main.js',
        userfinder: './js/userfinder.js'
    },
    watch: env,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: "[name].bundle.js",
        publicPath: "./build/",
    },
    devtool: env ? "cheap-module-eval-source-map": "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
    ]
}

if(!env) {
    config.plugins.push(new UrglifyJSPlugin({
        sourceMap: true
    }))
}

module.exports = config