const path = require('path');

module.exports = {
    entry: {
        roxejs_api: './src/roxejs-api.ts',
        roxejs_jsonrpc: './src/rpc-web.ts',
        roxejs_jssig: './src/roxejs-jssig.ts',
        roxejs_numeric: './src/roxejs-numeric.ts',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.web.json'
                    }
                },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: x => x.chunk.name.replace('_', '-') + '-debug.js',
        library: '[name]',
        path: path.resolve(__dirname, 'dist-web', 'debug'),
    }
};
