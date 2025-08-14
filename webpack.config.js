// const path = require('path');
module.exports = {
    entry: './src/app.ts',
    output:  { // creates and put app.js in a virtual dist folder. so we dont need a dist folder anymore
        filename: 'app.js',
        path: __dirname + './dist'
        // path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'awesome-typescript-loader'} // type script loader for webpack
        ]
    },
    devServer: {
        port: 3000,
    },
};
