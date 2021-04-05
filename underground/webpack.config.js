const path = require('path');

module.exports = {
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
            },
        ]
        },
    entry: './assets/map.js',  // path to our input file
    output: {
        filename: 'map-bundle.js',  // output bundle file name
        path: path.resolve(__dirname, './static'),  // path to our Django static directory
    },
};
