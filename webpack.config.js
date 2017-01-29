const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,

    entry: './src/index.jsx',
    output: {
        path: './dist',
        filename: 'todo.js'
    },  

    //
    module: {
        loaders: [
            {test: /\.html$/, loader: 'html', query: {minimize: true}},
            {test: /\.(css)$/, loader: 'style-loader'},
            {test: /\.(css)$/,
                loader: 'css-loader',
                query: { 
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'}
            },
            {
                test: /\.woff(\?.*$|$)/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
            }, {
                test: /\.woff2(\?.*$|$)/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]',
            },
            {
                test: /\.(png|jpg)(\?.*$|$)/,
                loader: 'url-loader?limit=10000',
            },
            {
                test: /\.(eot|ttf|svg|gif)(\?.*$|$)/,
                loader: 'file-loader',
            },
            {
                test: /\.js[x]*$/,
                exclude: /(node_modules)/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react,plugins[]=transform-decorators-legacy,plugins[]=babel-plugin-transform-class-properties'],
            },
        ],
    },

    plugins:[
        new HtmlWebpackPlugin({      
            template: 'src/index.html'      
        })
    ],

    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx'],
    }, 
};
