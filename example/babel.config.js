module.exports = api => {
    api.cache(true);
    const presets = ['babel-preset-expo'];
    // to resolve the bamboo-shoots packages directory
    const plugins = [
        [
            'module-resolver',
            {
                root: ['../src'],
                extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
                alias: {
                    'bamboo-shoots': '../src/index',
                },
            },
        ],
    ];

    const env = {
        production: {
            plugins: ['react-native-paper/babel'],
        },
    };

    return {
        presets,
        plugins,
        env,
    };
};