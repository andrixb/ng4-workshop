const path = require('path');
const webpack = require('webpack');
const ExtractText = require('extract-text-webpack-plugin');
const Copy = require('copy-webpack-plugin');
const Html = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');
const Compress = require('compression-webpack-plugin');
const { AotPlugin } = require('@ngtools/webpack');

module.exports = env => {
    const isProd = env && env.production;

    return {
        entry: {
            main: path.join(__dirname, '/src/main.ts'),
        },

        output: {
            path: path.join(__dirname, '/dist'),
            publicPath: '/',
            filename: '[name].bundle.js',
            chunkFilename: '[id].chunk.js',
        },

        module: {
            rules: [
                {
                    test: /\.json$/,
                    use: 'json-loader',
                },
                {
                    test: /\.ts$/,
                    exclude: ['node_modules'],
                    use: [{
                        loader: '@ngtools/webpack',
                    }, {
                        loader:'angular-router-loader',
                        options: {
                            aot: isProd,
                        }
                    }],
                },
                {
                    test: /\.html$/,
                    use: 'html-loader',
                },
                {
                    test: /\.(sass|scss)$/,
                    exclude: [`${__dirname}/src/styles/main.scss`],
                    use: setupSassLoaders(isProd, true),
                },
                {
                    test: /\.(sass|scss)$/,
                    include: [`${__dirname}/src/styles/main.scss`],
                    use: setupSassLoaders(isProd, false),
                },
            ],
        },

        resolve: {
            extensions: ['.ts', '.js', '.json', '.sass', '.scss'],
            modules: [
                path.join(__dirname, 'src/app/'),
                path.join(__dirname, 'src/styles'),
                'node_modules',
            ],
        },

        devtool: isProd ? 'source-map' : 'inline-source-map',

        devServer: {
            contentBase: path.join(__dirname, '/src/static'),
            publicPath: '/',
            hot: true,
            quiet: true,
            historyApiFallback: true,
        },

        plugins: setupPlugins(isProd),
    }
};

const setupSassLoaders = (isProd, isModule) => {
    const use = [];

    if (isModule) {
        use.push({
            loader: 'exports-loader?module.exports.toString()',
        });
    }

    use.push({
        loader: 'css-loader',
        options: {
            minimize: isProd,
            sourceMap: !isProd,
            importLoaders: 1,
        },
    });

    use.push({
        loader: 'postcss-loader',
        options: {
            plugins: () => ([
                require('autoprefixer'),
            ]),
        },
    });

    use.push({
        loader: 'sass-loader',
        options: {
            sourceMap: !isProd,
        },
    });

    return isModule
        ? use
        : ExtractText.extract({fallback: 'style-loader', use});
};

const setupPlugins = isProd => {
    const plugins = [
        new Html({
            template: path.join(__dirname, '/src/index.html'),
            hash: isProd ? true : false,
            minify: {
                collapseWhitespace: isProd ? true : false,
            },
        }),
        new ExtractText({
            filename: 'styles.css',
            allChunks: true,
            disable: !isProd,
        }),
        new AotPlugin({
            tsConfigPath: path.join(__dirname, 'tsconfig.json'),
            mainPath: path.join(__dirname, '/src/main.ts'),
            skipCodeGeneration: !isProd,
        }),
    ];

    if (isProd) {
        plugins.push(
            new webpack.NoEmitOnErrorsPlugin(),
            new Clean('dist'),
            new Copy([
                {context: path.join(__dirname, '/src/static/'), from: '**/*'},
            ]),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new webpack.optimize.CommonsChunkPlugin({
                async: true,
                children: true,
                minChunks: 2
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['main'],
                minChunks: module => /node_modules/.test(module.resource),
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: {
                    screw_ie8: true,
                },
                compress: {
                    screw_ie8: true,
                    warnings: false
                },
                sourceMap: true,
                comments: false,
            }),
            new Compress({
                regExp: /\.(css|js)$/,
            })
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    }

    return plugins;
};
