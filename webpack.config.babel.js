import webpack from 'webpack';
import path from 'path';

export const baseConfig = {
    entry: {
        landing: [
            'babel-polyfill',
            './src/landing/landing.js',
        ],
        setup: [
            'babel-polyfill',
            './src/setup.js',
        ],
        vendors: ['react'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
            { test: require.resolve('react'), loader: 'expose?React' },
            { test: /\.svg$/, loader: 'file?name=[path][name].[ext]&context=./static' },
        ],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js'),
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true, // required to allow react-router -- webpack-dev-server will return 404s, but then the browser will fall back to the history API for routes
    },
    plugins: [],
};

const webpackClientUrl = 'webpack-dev-server/client?https://localhost:3000'; // port must match port where the dev server is running

// development config
export default {
    ...baseConfig,
    devtool: 'eval',
    entry: {
        ...baseConfig.entry,
        landing: [webpackClientUrl, ...baseConfig.entry.landing],
        setup: [webpackClientUrl, ...baseConfig.entry.setup],
    },
};
