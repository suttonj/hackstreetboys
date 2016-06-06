import webpack from 'webpack';

import { baseConfig } from './webpack.config.babel.js';
    
const prodBuildOptions = {
    compressor: {
        warnings: false,
    },
    options: {
        comments: false,
        drop_debugger: true,
        drop_console: true,
    },
    comments: false,
    mangle: true,
    compress: true,
    sourceMap: true,
};

export default {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(prodBuildOptions),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ],
};
