const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: argv.mode === 'production' ? 'hidden-source-map' : 'source-map',
    plugins: [
       //  new CopyWebpackPlugin({
       //      patterns: [
       //      { from: 'src/cards.json',
       //        to:  path.join(__dirname, 'dist')
       //      },
       //      ],
       //  }
       // ),

        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                // query: {
                //     presets: ['@babel/preset-env', '@babel/preset-react'],
                //     plugins: ['@babel/plugin-proposal-class-properties']
                // }

            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: {index: '/'},
        port: 9000
    }
});