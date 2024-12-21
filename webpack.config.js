// webpack.config.js
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
    // "production" for minified output, "development" for easier debugging
    mode: "production",

    // 1) The starting point for Webpack
    entry: "./config.js",

    // 2) Where Webpack should place the bundled file
    output: {
        filename: "bundle.js",                   // The name of the output file
        path: path.resolve(__dirname, "dist"),   // Output folder: ./dist
    },

    // 3) Plugins to transform/replace env variables
    plugins: [
        new Dotenv({
            systemvars: true
        }),
    ],
};
