var webpack = require('webpack')

module.exports = {
    entry: './app/index.js',

    resolve: {
        modulesDirectories: ['app', 'node_modules'],
        fallback: __dirname + '/node_modules',
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },

    output: {
        publicPath: "/assets/",
        filename: "bundle.js"
    },

    eslint: {
        configFile: '.eslintrc',
        formatter: require('eslint-friendly-formatter')
    },

    module: {
        loaders: [
            {
                test: /\.(jsx?|js)$/,
                loaders: [
                    'react-hot',
                    'babel',
                    'eslint-loader'
                ],
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],

    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: "./dev-server",
        inline: true,
        // // mobile access: enter ip, uncomment, and restart process
        // host: '192.168.1.97',
        // historyApiFallback: {
        //     index: 'index.html',
        //     rewrites: entryRewrites(Object.keys(entry))
        // }
    }
};
