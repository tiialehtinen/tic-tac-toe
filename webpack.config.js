var path = require('path')
var production = process.env.NODE_ENV === 'production'

module.exports = {
    debug: !production,
    devtool: production ? false : 'eval',
    entry: './src/components/App/App.js',
    output: {
        path: __dirname + '/builds',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
            },
            {
                test: /\.scss/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('./'),
        stats: {colors: true}
    }
};
