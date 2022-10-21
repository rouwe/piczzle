const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/app.tsx",
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.scss$|\.css$/, 
                use: [
                    { loader: MiniCssExtractPlugin.loader},
                    { loader: "css-loader"},
                    { loader: "postcss-loader"},
                    { loader: "sass-loader"}
                ]
            },
            { 
                test: /\.tsx?$|\.ts$/,
                exclude: "/node_modules/",
                use: "ts-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}