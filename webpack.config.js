var webpack = require('webpack');

module.export = {
    entry: './app/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loader: [
            {test:/\.ts$/, loader:'ts'}
        ]
    },
    resolved:{
        extension:['','.js','.ts']
    }
};