const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'bin'),
    },

    resolve: {
        alias: {
            uiSvc: path.resolve(__dirname, 'src/services/ui'),
            scado: path.resolve(__dirname, 'src/components'),
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
        ],
    },

};
