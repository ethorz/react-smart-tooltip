const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './docs/js/index.js',
    ],
    output: {
        path: path.join(__dirname, '/docs/build'),
        filename: './bundle.js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader'],
            }, {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                loaders: [
                    'babel-loader',
                    __dirname + '/code-loader'
                ],
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-smart-tooltip': path.resolve(__dirname, './src/index.js')
        },
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            quiet: true
        }),
        // new webpack.NoErrorsPlugin(),
    ],
    quiet: true
};