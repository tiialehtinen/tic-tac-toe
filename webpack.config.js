var path = require("path")

module.exports = {
    entry: {
        app: ["./src/js/main"]
    },
    devtool: "source-map",
    debug: true,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },

    output: {
        path: __dirname + '/dist/js', filename: 'bundle.js'
    }
};
