import webpack from 'webpack';
import path from 'path';

export const baseConfig = {
    entry: {
        landing: [
            'babel-polyfill',
            './src/landing.js'
        ],
        setup: [
            'babel-polyfill',
            './src/setup.js'
        ],
        vendors: ['react'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'build',
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: require.resolve('react'), loader: 'expose?React' },
        ],
        plugins: [
            new webpack.optimize.CommonsChunkPlugin('vendors', 'vendor.js')
        ],
    },
    plugins: [],
}

const webpackClientUrl = 'webpack-dev-server/client?http://localhost:3000'; // port must match port where the dev server is running

// development config
export default {
    ...baseConfig,
    devtool: 'eval',
    entry: {
        ...baseConfig.entry,
        landing: [webpackClientUrl, ...baseConfig.entry.landing],
        setup: [webpackClientUrl, ...baseConfig.entry.setup],
    },
}
