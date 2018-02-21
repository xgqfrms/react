const path = require('path');
const webpack = require('webpack');
// var path = require('path');
// var webpack = require('webpack');

// process.env.NODE_ENV = `production`;
// process.env.NODE_ENV = `development`;

if (process.env.NODE_ENV !== 'production') {
    console.log('😃, Looks like we are in development mode!');
}else{
    console.log('Tada, 🎉, we are in production mode!');
}

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',// object & array
        './client/reduxstagram',// main.jsx
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'client'),
            },
            // css
            {
                test: /\.styl$/,// stylus
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!stylus-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
};
