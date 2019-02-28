const path = require('path');
module.exports = {
    mode: 'development',
    entry: [
        './src/index.ts',
        './test/index.spec.ts'
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { configFile: 'src/tsconfig.json' },
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: { configFile: 'test/tsconfig.json' },
                include: path.resolve(__dirname, 'test')
            }
        ]
    }
}