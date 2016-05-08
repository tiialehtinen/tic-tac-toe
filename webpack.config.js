var path = require("path")

module.exports = {
    entry: "./src/js/main.js",
    output: {path: __dirname + '/dist/js', filename: 'bundle.js'},
    devtool: "source-map", // or "inline-source-map"
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
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/scss")]
    }

};
