const path = require('path');

function isDevMode() {
    return process.env.NODE_ENV === 'development';
}

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.p?css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader?sourceMap',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: isDevMode()
                        ? '[path][name]__[local]___[hash:base64:5]'
                        : '[hash:base64:15]'
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    sourceMap: isDevMode() ? 'inline' : false
                }
            }]
        }]
    },
    devtool: 'source-map'
};
