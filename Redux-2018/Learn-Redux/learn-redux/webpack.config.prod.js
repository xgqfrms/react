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
        './client/reduxstagram',// main.jsx & object & array
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',// app.js/main.js
        publicPath: '/static/',// public
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
                test: /\.styl$/,// ??? stylus css pre-processor ???
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!stylus-loader',
            }
        ],
        // rules : js && .jsx / css && .scss
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'",
                // `NODE_ENV`: `production`,// NODE_ENV
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        })
    ],
};
