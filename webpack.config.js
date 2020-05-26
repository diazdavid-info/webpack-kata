const jsRules = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
};

const styleRules = {
    test: /\.s[ac]ss$/i,
    use: [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
};

module.exports = {
    module: {
        rules: [jsRules, styleRules]
    }
};
