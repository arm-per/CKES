const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            Components: path.resolve(__dirname, "./src/components"),
            Styles: path.resolve(__dirname, "./src/styles"),
            Assets: path.resolve(__dirname, "./src/assets/"),
            Helpers: path.resolve(__dirname, "./src/helpers/"),
            Pages: path.resolve(__dirname, "./src/pages"),
            Utilities: path.resolve(__dirname, "./src/utilities")
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                ],
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpeg|jpg|webp|gif)$/,
                type: "asset",
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video",
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    devServer: {
        allowedHosts: path.dirname(__dirname,"dist"),
        port: 3000,
        compress: true,
        historyApiFallback: true,
    }
}
